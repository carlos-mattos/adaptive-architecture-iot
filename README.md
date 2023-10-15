# Copiando o CSV para a tabela no Postgres

## Executar o docker-compose
```bash
docker-compose build
docker-compose up
```

## Copiar o CSV para dentro do container postgres

```bash
docker cp D:\tcc\iot\iot_telemetry_data.csv ed814db1d01d:/tmp
```

## Criar a tabela telemetry:
```sql
CREATE TABLE telemetry (
    ts VARCHAR(255),
    device VARCHAR(255),
    co VARCHAR(255),
    humidity VARCHAR(255),
    light VARCHAR(255),
    lpg VARCHAR(255),
    motion VARCHAR(255),
    smoke VARCHAR(255),
    temp VARCHAR(255)
);
```

## Entra no container do postgres e se conectar ao BD
```bash
psql postgres://admin:admin@localhost:5432/iot_data
```

## Copiar do local do container para dentro da tabela no banco
```bash
\copy telemetry(ts, device, co, humidity, light, lpg, motion, smoke, temp) from 'D:\tcc\iot\iot_telemetry_data.csv' delimiter ',' CSV HEADER;
```