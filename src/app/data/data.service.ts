import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : {
    [key:string] : {
      [key:string] : {number: number, name: string, selected:boolean}[]|undefined
    }|undefined
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
        this.data[key]![newName] = [...this.data[key]![oldName]!];
        this.data[key]![oldName] = undefined; 
        delete this.data[key]![oldName];
    }
    this.data = {...this.data};
  }

  changeCategoryNameFromTo(oldName:string, newName:string){
    let key : keyof typeof this.data;
    for (key in this.data){
        if (key === oldName){
            this.data[newName] = this.data[key];
            this.data[key] = undefined; 
            delete this.data[key];
        }
    }
    this.data = {...this.data};
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
      this.data[key]![name] = [] as any[];
    }
    this.data = {...this.data}
  }

  addCategory(name:string){
    this.counter += 1;
    this.data = {...this.data, [`${name}${this.counter}`]: this.scalaObject()};
}

  addItemToScalaInCategory(state:string, category:string ){
    this.currentHighestNumber += 1;
    this.data[category]?.[state]?.push({
        number: this.currentHighestNumber,
        name: 'Neues Item',
        selected: false
    });
    this.data = {...this.data}
  }

}