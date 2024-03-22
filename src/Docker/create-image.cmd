docker build --no-cache -f SQL\Dockerfile.PostgreSql -t lectureexample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t lectureexample/app ../..
