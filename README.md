# ror-practice
Ruby on Rails Practice Repo

### Goals
- Need to know how to write a RESTful
- Need to know how to deliver a high-quality, flexible and elegant web server written in `Ruby on Rails`

### Requirement
#### Basic
* New website to display turnovers like [this](http://stock.wearn.com/qua.asp). Please render turnover list in following format.
![Alt text](https://i.imgur.com/fqem08U.png)
* Get data from fake `api-server`. Calculate specific field on your own! Please following the instruction of [api-server#README](./api-server/README.md) in **api-server**.

#### Advanced
* Functionality of `filter`
  * Give a RESTful API which can get the turnover by `date(日期)` and `ID(代號)` (OR condition)
  * Give a RESTful API which can sort by any stock information and save the result as a file

* Abandon fake server. Crawl the daily top 50 turnover(成交量) and save to `database`
  * Check [this](http://stock.wearn.com/qua.asp) to find the turnover everyday
  * You have to save following stock information to database
  * You can provide a RESTful API to do this job or another way you think better


### System Requirement
* (Optional)`Angular 1.x` (`1.2` will be better)
  * Try to use directive to wrap the widget
* `Ruby@2.3.7`
* `Rails@3.2.22.1`
* Use [rubocop](https://github.com/rubocop-hq/rubocop) to lint your Ruby!
* Write test is necessary, both for `javascript` and `Ruby`
  * Use `RSpec` and `factory_girl` for ROR
  * Write test if your component or function is in incubating instead of finish
* Environment for `development` and `production` are **required**.
* Your application should be shipped with `Docker`
* Deploy your code to `Travis CI`
* Don't push a huge commit, you are supposed to be sliced your commit by each task

### Others
Be creative! Make your application incredible.
