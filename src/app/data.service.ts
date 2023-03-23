import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : {
    [key:string] : {
      [key:string] : {number: number, name: string, selected:boolean}[]
    }
  }= {
    "Data Stores": {
        "hold": [
            {
                "number": 1,
                "name": "AWS DynamoDB",
                "selected": false
            },
            {
                "number": 2,
                "name": "AWS S3",
                "selected": false
            },
            {
                "number": 3,
                "name": "Elasticsearch",
                "selected": false
            },
            {
                "number": 4,
                "name": "etcd",
                "selected": false
            },
            {
                "number": 5,
                "name": "Exasol",
                "selected": false
            },
            {
                "number": 6,
                "name": "PostgreSQL",
                "selected": false
            },
            {
                "number": 7,
                "name": "Redis",
                "selected": false
            }
        ],
        "assess": [
            {
                "number": 8,
                "name": "Amazon Feature Store",
                "selected": false
            },
            {
                "number": 9,
                "name": "Amazon Redshift",
                "selected": false
            },
            {
                "number": 10,
                "name": "Druid",
                "selected": false
            },
            {
                "number": 11,
                "name": "HDFS",
                "selected": false
            }
        ],
        "trial": [
            {
                "number": 12,
                "name": "Amazon MemoryDB",
                "selected": false
            },
            {
                "number": 13,
                "name": "RocksDB",
                "selected": false
            }
        ],
        "adopt": [
            {
                "number": 14,
                "name": "Aerospike",
                "selected": false
            },
            {
                "number": 15,
                "name": "Apache Cassandra",
                "selected": false
            },
            {
                "number": 16,
                "name": "Consul",
                "selected": false
            },
            {
                "number": 17,
                "name": "CouchBase",
                "selected": false
            },
            {
                "number": 18,
                "name": "Hazelcast",
                "selected": false
            },
            {
                "number": 19,
                "name": "HBase",
                "selected": false
            },
            {
                "number": 20,
                "name": "Memcached",
                "selected": false
            },
            {
                "number": 21,
                "name": "MongoDB",
                "selected": false
            },
            {
                "number": 22,
                "name": "MySQL",
                "selected": false
            },
            {
                "number": 23,
                "name": "Oracle DB",
                "selected": false
            },
            {
                "number": 24,
                "name": "Solr",
                "selected": false
            },
            {
                "number": 25,
                "name": "ZooKeeper",
                "selected": false
            }
        ]
    },
    "Data Management": {
        "hold": [
            {
                "number": 26,
                "name": "Airflow",
                "selected": false
            },
            {
                "number": 27,
                "name": "AWS EMR",
                "selected": false
            },
            {
                "number": 28,
                "name": "AWS Kinesis",
                "selected": false
            },
            {
                "number": 29,
                "name": "AWS SNS",
                "selected": false
            },
            {
                "number": 30,
                "name": "AWS SQS",
                "selected": false
            },
            {
                "number": 31,
                "name": "Databricks",
                "selected": false
            },
            {
                "number": 32,
                "name": "Kafka",
                "selected": false
            },
            {
                "number": 33,
                "name": "Nakadi",
                "selected": false
            },
            {
                "number": 34,
                "name": "Spark",
                "selected": false
            }
        ],
        "assess": [
            {
                "number": 35,
                "name": "Flink",
                "selected": false
            },
            {
                "number": 36,
                "name": "Google BigQuery",
                "selected": false
            },
            {
                "number": 37,
                "name": "Presto",
                "selected": false
            },
            {
                "number": 38,
                "name": "RabbitMQ",
                "selected": false
            }
        ],
        "trial": [
            {
                "number": 39,
                "name": "AWS Athena",
                "selected": false
            },
            {
                "number": 40,
                "name": "AWS Glue",
                "selected": false
            },
            {
                "number": 41,
                "name": "dbt",
                "selected": false
            }
        ],
        "adopt": [
            {
                "number": 42,
                "name": "AWS Data Pipeline",
                "selected": false
            },
            {
                "number": 43,
                "name": "Hadoop",
                "selected": false
            },
            {
                "number": 44,
                "name": "YARN",
                "selected": false
            }
        ]
    },
    "Infrastructure": {
        "hold": [
            {
                "number": 45,
                "name": "Amazon SageMaker",
                "selected": false
            },
            {
                "number": 46,
                "name": "AWS CloudFormation",
                "selected": false
            },
            {
                "number": 47,
                "name": "AWS CloudFront",
                "selected": false
            },
            {
                "number": 48,
                "name": "Docker",
                "selected": false
            },
            {
                "number": 49,
                "name": "Kubernetes",
                "selected": false
            },
            {
                "number": 50,
                "name": "OpenTracing",
                "selected": false
            },
            {
                "number": 51,
                "name": "Skipper",
                "selected": false
            }
        ],
        "assess": [
            {
                "number": 52,
                "name": "AWS Elemental MediaConvert",
                "selected": false
            },
            {
                "number": 53,
                "name": "AWS Lambda",
                "selected": false
            },
            {
                "number": 54,
                "name": "AWS Step Functions",
                "selected": false
            }
        ],
        "trial": [
            {
                "number": 55,
                "name": "Slurm",
                "selected": false
            },
            {
                "number": 56,
                "name": "WebAssembly",
                "selected": false
            }
        ],
        "adopt": [
            {
                "number": 57,
                "name": "STUPS",
                "selected": false
            },
            {
                "number": 58,
                "name": "ZMON",
                "selected": false
            }
        ]
    },
    "Languages": {
        "hold": [
            {
                "number": 59,
                "name": "Go",
                "selected": false
            },
            {
                "number": 60,
                "name": "GraphQL",
                "selected": false
            },
            {
                "number": 61,
                "name": "Java",
                "selected": false
            },
            {
                "number": 62,
                "name": "JavaScript",
                "selected": false
            },
            {
                "number": 63,
                "name": "Kotlin",
                "selected": false
            },
            {
                "number": 64,
                "name": "OpenAPI (Swagger)",
                "selected": false
            },
            {
                "number": 65,
                "name": "Python",
                "selected": false
            },
            {
                "number": 66,
                "name": "Scala",
                "selected": false
            },
            {
                "number": 67,
                "name": "Swift",
                "selected": false
            },
            {
                "number": 68,
                "name": "TypeScript",
                "selected": false
            }
        ],
        "assess": [
            {
                "number": 69,
                "name": "Dart",
                "selected": false
            }
        ],
        "trial": [
            {
                "number": 70,
                "name": "R",
                "selected": false
            }
        ],
        "adopt": [
            {
                "number": 71,
                "name": "Clojure",
                "selected": false
            },
            {
                "number": 72,
                "name": "Haskell",
                "selected": false
            },
            {
                "number": 73,
                "name": "Rust",
                "selected": false
            }
        ]
    }
}

currentHighestNumber = 73;
counter = 1;
states  = [ {name:'adopt', relativeSize: 1}, {name:'trial', relativeSize: 1},{name:'assess', relativeSize: 1},{name:'hold', relativeSize: 1}] as any;
  scalaObject(){
    return this.states.reduce((a:Record<string, any>,b:{name:string})=> {
        a[b.name]=[];
        return a;
    }, {} as Record<string, any>);
  }

  changeScalaCategory(event:any, newCategory:any){
    const index = event.formerCategory.indexOf(event.item);
    event.formerCategory.splice(index, 1);
    newCategory.push(event.item);
    this.data = {...this.data};
  }

  changeScalaCategoryNameFromTo(oldName:string, newName:string){
    const object = this.states.find((x:any)=>x.name === oldName);
    object.name = newName;
    let key : keyof typeof this.data;
    for (key in this.data){
      this.data[key] = {...this.data[key]}
      this.data[key][newName] = [...this.data[key][oldName]];
      //delete this.data[key][oldName];
    }
    this.data = {...this.data};
    this.states = [...this.states];
    console.log(this.states, this.data);


  }

  addScalaCategoryAfter(name:string, after:string){
    this.counter += 1;
    name = name + this.counter;
    const index = this.states.findIndex((x:any)=>x.name === after);
    this.states.splice(index+1, 0, {name:name, relativeSize:1} );
    this.states = [...this.states];
    let key : keyof typeof this.data;
    for (key in this.data){
      this.data[key] = {...this.data[key]}
      this.data[key][name] = [] as any[];
    }
    this.data = {...this.data}
  }

  addCategory(name:string){
    this.counter += 1;
    this.data = {...this.data, [`${name}${this.counter}`]: this.scalaObject()};
}

  addItemToScalaInCategory(state:string, category:string ){
    this.currentHighestNumber += 1;
    this.data[category][state].push({
        number: this.currentHighestNumber,
        name: 'Neues Item',
        selected: false
    });
    this.data = {...this.data}
  }

}

/*
function range(max:number, min=1){
  const result = [];
  for (let i = min; i <max; i++){
    result.push(i);
  }
  return result;
}
function techrange(min:number, max:number) : ({number: number, name: string, selected:boolean})[] {
  return range(max, min)
    .map(n=>tech.find(t=>t.number === n) ?? {number: 1, name: 'dummy'})
    .map(x=> ({...x, selected:false}));
}
  const tech : {number: number, name: string}[]= [{number: 59, name: "Go"},
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



  data : { [key : string] : { [key in states] : ({number: number, name: string}|undefined)[] }} = {
    "Data Stores" : {
      [this.states[3]]: techrange(1,8),
      [this.states[2]]: techrange(8,12),
      [this.states[1]]: techrange(12,14),
      [this.states[0]]: techrange(14,26)
    },

    "Data Management" : {
      [this.states[3]]: techrange(26,35),
      [this.states[2]]: techrange(35, 39),
      [this.states[1]]: techrange(39,42),
      [this.states[0]]: techrange(42,45)
    },


    "Infrastructure" : {
      [this.states[3]]: techrange(45,52),
      [this.states[2]]: techrange(52, 55),
      [this.states[1]]:techrange(55,57),
      [this.states[0]]: techrange(57,59)
    },


    "Languages" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },
    "Languages1" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },
    "Languages2" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },
    /*
    "Languages3" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },

    "Languages4" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },

    "Languages5" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },
    "Languages6" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },

    "Languages7" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    },

    "Languages8" : {
      [this.states[3]]: techrange(59,69),
      [this.states[2]]: techrange(69, 70),
      [this.states[1]]:techrange(70,71),
      [this.states[0]]: techrange(71,74)
    }*/
  /*}*/
