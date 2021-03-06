{
    "apps": [
        {
            "name": "api",
            "script": "./src",
            "merge_logs": true,
            "max_restarts": 20,
            "instances": 4,
            "max_memory_restart": "200M",
            "env": {
                "PORT": 8200,
                "NODE_ENV": "production"
            }
        }
    ]
}