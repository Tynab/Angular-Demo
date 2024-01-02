using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.SqlClient;
using System.Web.Script.Services;
using System.Web.Services;
using static Newtonsoft.Json.DateTimeZoneHandling;
using static Newtonsoft.Json.JsonConvert;
using static System.Configuration.ConfigurationManager;
using static System.DateTime;
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
            {
                var cmd = new SqlCommand("SELECT * FROM Employees", conn);

                conn.Open();

                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    employees.Add(new Employee
                    {
                        Id = int.Parse(reader[nameof(Employee.Id)].ToString()),
                        Name = reader[nameof(Employee.Name)].ToString(),
                        DoB = Parse(reader[nameof(Employee.DoB)].ToString()),
                        Salary = decimal.Parse(reader[nameof(Employee.Salary)].ToString()),
                        Gender = reader[nameof(Employee.Gender)].ToString(),
                        Status = bool.Parse(reader[nameof(Employee.Status)].ToString())
                    });
                }

                Context.Response.Write(SerializeObject(employees, new JsonSerializerSettings
                {
                    DateFormatString = "yyyy-MM-ddTHH:mm:ss.fffZ",
                    DateTimeZoneHandling = Utc
                }));
            }
        }
    }
}
