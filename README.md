# Gerando uma imagem com docker

```cmd
# Faça login no Docker Hub através do Termimal

docker login
username: <<seu login de acesso ao docker>>
password: <<sua senha pessoal>>

# Para construir a imagem, execute o comando no Terminal:

docker build -t teste .

# Para executar a image:

docker run --rm teste

```