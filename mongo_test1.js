var mongClient = require('mongodb').MongoClient;
var db_conn_str = 'mongodb://localhost:27017/my';

var insertData = function(db, callback)
{
    var collection = db.collection('col');
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data, function(err, result)
    {
        if (err)
        {
            console.log('Error ' + err);
            return;
        }
        cb(result);
    });
}

mongClient.connect(db_conn_str, function(err, db)
{
    console.log('连接成功');
    insertData(db, function(result)
    {
        console.log(result);
        db.close();
    });
});