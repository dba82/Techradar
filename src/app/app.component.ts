import { Component } from '@angular/core';


function range(max:number, min=1){
  const result = [];
  for (let i = min; i <max; i++){
    result.push(i);
  }
  return result;
}
function techrange(min:number, max:number){
  return range(max, min).map(n=>tech.find(t=>t.number === n));
}
  const tech = [{number: 59, name: "Go"},
  {number: 60, name: "GraphQL"},
  {number: 61, name: "Java"},
  {number: 62, name: "JavaScript"},
  {number: 63, name: "Kotlin"},
  {number: 64, name: "OpenAPI (Swagger)"},
  {number: 65, name: "Python"},
  {number: 66, name: "Scala"},
  {number: 67, name: "Swift"},
  {number: 68, name: "TypeScript"},
  {number: 69, name: "Dart"},
  {number: 70, name: "R"},
  {number: 71, name: "Clojure"},
  {number: 72, name: "Haskell"},
  {number: 73, name: "Rust"},
  {number: 45, name: "Amazon SageMaker"},
  {number: 46, name: "AWS CloudFormation"},
  {number: 47, name: "AWS CloudFront"},
  {number: 48, name: "Docker"},
  {number: 49, name: "Kubernetes"},
  {number: 50, name: "OpenTracing"},
  {number: 51, name: "Skipper"},
  {number: 52, name: "AWS Elemental MediaConvert"},
  {number: 53, name: "AWS Lambda"},
  {number: 54, name: "AWS Step Functions"},
  {number: 55, name: "Slurm"},
  {number: 56, name: "WebAssembly"},
  {number: 57, name: "STUPS"},
  {number: 58, name: "ZMON"},
  {number: 1, name: "AWS DynamoDB"},
  {number: 2, name: "AWS S3"},
  {number: 3, name: "Elasticsearch"},
  {number: 4, name: "etcd"},
  {number: 5, name: "Exasol"},
  {number: 6, name: "PostgreSQL"},
  {number: 7, name: "Redis"},
  {number: 8, name: "Amazon Feature Store"},
  {number: 9, name: "Amazon Redshift"},
  {number: 10, name: "Druid"},
  {number: 11, name: "HDFS"},
  {number: 12, name: "Amazon MemoryDB"},
  {number: 13, name: "RocksDB"},
  {number: 14, name: "Aerospike"},
  {number: 15, name: "Apache Cassandra"},
  {number: 16, name: "Consul"},
  {number: 17, name: "CouchBase"},
  {number: 18, name: "Hazelcast"},
  {number: 19, name: "HBase"},
  {number: 20, name: "Memcached"},
  {number: 21, name: "MongoDB"},
  {number: 22, name: "MySQL"},
  {number: 23, name: "Oracle DB"},
  {number: 24, name: "Solr"},
  {number: 25, name: "ZooKeeper"},
  {number: 26, name: "Airflow"},
  {number: 27, name: "AWS EMR"},
  {number: 28, name: "AWS Kinesis"},
  {number: 29, name: "AWS SNS"},
  {number: 30, name: "AWS SQS"},
  {number: 31, name: "Databricks"},
  {number: 32, name: "Kafka"},
  {number: 33, name: "Nakadi"},
  {number: 34, name: "Spark"},
  {number: 35, name: "Flink"},
  {number: 36, name: "Google BigQuery"},
  {number: 37, name: "Presto"},
  {number: 38, name: "RabbitMQ"},
  {number: 39, name: "AWS Athena"},
  {number: 40, name: "AWS Glue"},
  {number: 41, name: "dbt"},
  {number: 42, name: "AWS Data Pipeline"},
  {number: 43, name: "Hadoop"},
  {number: 44, name: "YARN"}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Techradar';

  


  data = {
    "Data Stores" : {
      adopt: techrange(1,8),
      trial:techrange(8,12),
      assess: techrange(12,14),
      hold: techrange(14,26)
    },

    "Data Management" : {
      adopt: techrange(26,35),
      trial: techrange(35, 39),
      assess:techrange(39,42),
      hold: techrange(42,45)
    },


    "Infrastructure" : {
      adopt: techrange(45,52),
      trial: techrange(52, 55),
      assess:techrange(55,57),
      hold: techrange(57,59)
    },


    "Languages" : {
      adopt: techrange(59,69),
      trial: techrange(69, 70),
      assess:techrange(70,71),
      hold: techrange(71,74)
    }
  }

  showGrid = false;
  showTooltipFor(){

  }

}
