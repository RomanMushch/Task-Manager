export class Enum {
  public static MethodType =
    {
      POST: 'POST',
      GET: 'GET',
      DELETE: 'DELETE',
      PUT: 'PUT'
    };
  public static PriorityType =
    [
      {
        Type: 'Low',
        Selected: false
      },
      {
        Type: 'Normal',
        Selected: false
      },
      {
        Type: 'High',
        Selected: false
      }
    ]
    ;
  public static protocol = 'https://';
  public static apiPath = 'testapi.doitserver.in.ua/api/';
}
