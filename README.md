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

# SonarScanner o que é?

## Executando o SonarScanner no local

```docker

sonar-scanner.bat \
-Dsonar.projectKey=typescript-test \
-Dsonar.host.url=http://192.168.15.200:9000 \
-Dsonar.login=4e1076ea602d465edea8d3735fcb26243feaa8d3 \
-Dsonar.sources=. \
-Dsonar.sourceEncoding=UTF-8 \
-Dsonar.verbose=true \
-Dsonar.coverageReportPaths=coverage/clover.xml \
-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
-Dsonar.test.inclusions=**/*.test.ts,**/*.spec.ts \
-Dsonar.exclusions=coverage/**/*,**/*.html,**/*.css,**/*.test.js,**/*.spec.js,.js

---------------------------------------------------------------------------------

docker run \
--rm \
-e SONAR_HOST_URL="http://192.168.15.200:9000" \
-e SONAR_LOGIN="4e1076ea602d465edea8d3735fcb26243feaa8d3" \
-v "D:\\repository\\LearnTSFunctionalProgramming\\packages\\functional:/usr/src" \
sonarsource/sonar-scanner-cli \
-Dsonar.projectKey=typescript-test \
-Dsonar.sourceEncoding=UTF-8 \
-Dsonar.verbose=false \
-Dsonar.sources=. \
-Dsonar.coverageReportPaths=coverage/clover.xml \
-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
-Dsonar.test.inclusions=**/*.test.ts,**/*.spec.ts \
-Dsonar.exclusions=coverage/**/*,**/*.html,**/*.css,**/*.test.js,**/*.spec.js,.js

```

## Executando o SonarScanner em uma imagem Docker
```docker
    -Dsonar.host.url=http://192.168.15.200:9000 \
    -Dsonar.login=d9e1ca5c58cb2c00dcf5a406b3395698d25b0402 \
    -Dsonar.sourceEncoding=windows-1252 \
    -Dsonar.flex.cobertura.reportPath=coverage-report/coverage-cobertua-flex.xml \
    -Dsonar.working.directory= /D/repository/LearnTSFunctionalProgramming/packages/functional/.scannerwork

docker run \
    --rm \
    -e SONAR_HOST_URL="http://192.168.15.200:9000" \
    -e SONAR_LOGIN="d9e1ca5c58cb2c00dcf5a406b3395698d25b0402" \
    -v "D:\\repository\\LearnTSFunctionalProgramming\\packages\\functional:/usr/src" \
    sonarsource/sonar-scanner-cli \
    -Dsonar.projectKey=learn-ts-func-pro \
    -Dsonar.projectName="Project Typescript Test" \
    -Dsonar.sourceEncoding=UTF-8 \
    -Dsonar.scm.provider=git \
    -Dsonar.verbose=false \
    -Dsonar.sources=. \
    -Dsonar.language=ts \
    -Dsonar.typescript.coveragePlugin=lcov \
    -Dsonar.typescript.lcov.reportPaths=coverage/lcov.info \
    -Dsonar.test.inclusions=**/*.test.ts,**/*.spec.ts \
    -Dsonar.exclusions=coverage/**/*,**/*.html,**/*.css,**/*.test.js,**/*.spec.js,.js


docker run \
    --rm \
    -e SONAR_HOST_URL="http://${SONARQUBE_URL}" \
    -e SONAR_LOGIN="myAuthenticationToken" \
    -v "${YOUR_REPO}:/usr/src" \
    sonarsource/sonar-scanner-cli

```

# Referências

https://gist.github.com/zmts/509f224950f85f3cfe4365e2b80081d1


https://github.com/marketplace/actions/build-and-push-docker-images

https://docs.sonarqube.org/latest/setup/get-started-2-minutes/

https://sonarcloud.io/issues?resolved=false

https://plataforma.fullcycle.com.br/courses/175/163/115/conteudos?capitulo=115&conteudo=6793

### SonarCloud

https://docs.sonarcloud.io/getting-started/first-analysis/
https://docs.sonarcloud.io/enriching/test-coverage/generic-test-data/


### Configuração do Jest com Typescript

https://kulshekhar.github.io/ts-jest/docs/guides/esm-support

https://jestjs.io/pt-BR/docs/cli

https://jestjs.io/pt-BR/docs/getting-started

https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421

https://github.com/kulshekhar/ts-jest

https://github.com/facebook/jest/issues/1211#issuecomment-247270306


```npm

npm i -D jest typescript
npm i -D ts-jest @types/jest
npx ts-jest config:init
npx jest

```