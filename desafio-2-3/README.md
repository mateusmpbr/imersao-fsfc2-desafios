# Desafios 2 e 3

## Desafio 2 - Backend e frontend
### Informações do desafio
Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.

Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos

- A aplicação Nest.js precisa rodar na porta 3000

- Aplicação React.js precisa rodar na porta 3001

- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes

- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude

### Como configurar
- Abrir o terminal na pasta `desafio-2-3` e executar: `docker-compose up -d`

### Como acessar
- Em algum navegador:
    - Para visualizar o endpoint "routes" do Nest.js, acessar: `http://localhost:3000/routes`
    - Para visualizar a aplicação React, acessar: `http://localhost:3001`

## Desafio 3 - Deploy no Kubernetes
### Informações do desafio
Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.

Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).

### Como configurar
- Instalar Kind: [https://kind.sigs.k8s.io/docs/user/quick-start](https://kind.sigs.k8s.io/docs/user/quick-start)

-  Abrir o terminal na pasta `desafio-2-3` e executar:
    - `kind create cluster`
    - `kubectl cluster-info --context kind-kind`
    - `kubectl apply -f k8s/backend/deploy.yaml -f k8s/backend/service.yaml`
        - OBS: Só prosseguir para o comando abaixo, quando o comando `kubectl get pods` retornar status `Running` para o pod em questão
    - `kubectl port-forward service/backend-service 3000:3000`

- Abrir outro terminal (também na pasta `desafio-2-3`) e executar:
    - `kubectl apply -f k8s/frontend/deploy.yaml -f k8s/frontend/service.yaml`
        - OBS: Só prosseguir para o comando abaixo, quando o comando `kubectl get pods` retornar status `Running` para o pod em questão
    - `kubectl port-forward service/frontend-service 3001:3001`

### Como acessar
- Em algum navegador:
    - Para visualizar o endpoint "routes" do Nest.js, acessar: `http://localhost:3000/routes`
    - Para visualizar a aplicação React, acessar: `http://localhost:3001`