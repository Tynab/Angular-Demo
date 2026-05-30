using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.SqlClient;
using System.Web.Script.Services;
using System.Web.Services;
using static Newtonsoft.Json.DateTimeZoneHandling;
using static Newtonsoft.Json.JsonConvert;
using static System.Configuration.ConfigurationManager;
using static System.Web.Services.WsiProfiles;

namespace AngularDemo.web
{
    /// <summary>
    /// Summary description for Employees
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = BasicProfile1_1)]
    [ToolboxItem(false)]
    [ScriptService]
    public sealed class Employees : WebService
    {
        [WebMethod]
        public void GetAll()
        {
            var employees = new List<Employee>();

            using (var conn = new SqlConnection(ConnectionStrings["Default"].ConnectionString))
            using (var cmd = new SqlCommand("SELECT Id, Name, DoB, Salary, Gender, Status FROM Employees", conn))
            {
                conn.Open();

                using (var reader = cmd.ExecuteReader())
                {
                    var idOrdinal = reader.GetOrdinal(nameof(Employee.Id));
                    var nameOrdinal = reader.GetOrdinal(nameof(Employee.Name));
                    var doBOrdinal = reader.GetOrdinal(nameof(Employee.DoB));
                    var salaryOrdinal = reader.GetOrdinal(nameof(Employee.Salary));
                    var genderOrdinal = reader.GetOrdinal(nameof(Employee.Gender));
                    var statusOrdinal = reader.GetOrdinal(nameof(Employee.Status));

                    while (reader.Read())
                    {
                        employees.Add(new Employee
                        {
                            Id = reader.GetInt32(idOrdinal),
                            Name = reader.IsDBNull(nameOrdinal) ? string.Empty : reader.GetString(nameOrdinal),
                            DoB = reader.IsDBNull(doBOrdinal) ? DateTime.MinValue : reader.GetDateTime(doBOrdinal),
                            Salary = reader.IsDBNull(salaryOrdinal) ? 0m : reader.GetDecimal(salaryOrdinal),
                            Gender = reader.IsDBNull(genderOrdinal) ? string.Empty : reader.GetString(genderOrdinal),
                            Status = !reader.IsDBNull(statusOrdinal) && reader.GetBoolean(statusOrdinal)
                        });
                    }
                }
            }

            Context.Response.Write(SerializeObject(employees, new JsonSerializerSettings
            {
                DateFormatString = "yyyy-MM-ddTHH:mm:ss.fffZ",
                DateTimeZoneHandling = Utc
            }));
        }
    }
}
