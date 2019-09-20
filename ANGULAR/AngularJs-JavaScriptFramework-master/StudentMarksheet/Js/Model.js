app.factory("SMfactory", ()=> {
    var object = {
        total:0,
        avg:0,
        percent:0,
        totalMarks(html, java, css, mean) {
            this.total = html + java + css + mean;
            return this.total;
        },
        myPercentage() {
            this.percent = this.total / 400 * 100;
            return this.percent;
        },
        myAverage() {
            this.avg = this.total / 4;
            return this.avg;
        }
    }
    return object;
});