@echo off
CHCP 65001

set dir=%~dp0

set apiServicesPath=%dir%..\src\api-services\

set apiServicesHost=http://metabolize-dev.funzoe.cn/swagger/Web/swagger.json

if exist %apiServicesPath% (
    echo ================================ 删除目录 api-services ================================
    rd /s /q %apiServicesPath%
)

echo ================================ 开始生成 api-services ================================

java -jar %dir%swagger-codegen-cli.jar generate -i %apiServicesHost% -l typescript-axios -o %apiServicesPath%

@rem 删除不必要的文件和文件夹
rd /s /q %apiServicesPath%.swagger-codegen
del /q %apiServicesPath%.gitignore
del /q %apiServicesPath%.npmignore
del /q %apiServicesPath%.swagger-codegen-ignore
del /q %apiServicesPath%git_push.sh
del /q %apiServicesPath%package.json
del /q %apiServicesPath%README.md
del /q %apiServicesPath%tsconfig.json

echo ================================ WebApi生成结束 ================================
pause
exit
