document.getElementById('inputRangeDesktop').oninput = function() {

    var value = (this.value-this.min) / (this.max-this.min) * 100;

    this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';

    if(this.value == 1) {

        planeValue_monthly.innerHTML = monthlyValues[0].moValue;
        pageViews_monthly.innerHTML = monthlyValues[0].moPage;

        planeValue_yearly.innerHTML = yearlyValues[0].yerValue;
        pageViews_yearly.innerHTML = yearlyValues[0].yerPage;

    } else if(this.value == 2) {

        planeValue_monthly.innerHTML = monthlyValues[1].moValue;
        pageViews_monthly.innerHTML = monthlyValues[1].moPage;

        planeValue_yearly.innerHTML = yearlyValues[1].yerValue;
        pageViews_yearly.innerHTML = yearlyValues[1].yerPage;

    } else if(this.value == 3) {

        planeValue_monthly.innerHTML = monthlyValues[2].moValue;
        pageViews_monthly.innerHTML = monthlyValues[2].moPage;

        planeValue_yearly.innerHTML = yearlyValues[2].yerValue;
        pageViews_yearly.innerHTML = yearlyValues[2].yerPage;

    } else if(this.value == 4) {

        planeValue_monthly.innerHTML = monthlyValues[3].moValue;
        pageViews_monthly.innerHTML = monthlyValues[3].moPage;

        planeValue_yearly.innerHTML = yearlyValues[3].yerValue;
        pageViews_yearly.innerHTML = yearlyValues[3].yerPage;

    } else if(this.value == 5) {

        planeValue_monthly.innerHTML = monthlyValues[4].moValue;
        pageViews_monthly.innerHTML = monthlyValues[4].moPage;

        planeValue_yearly.innerHTML = yearlyValues[4].yerValue;
        pageViews_yearly.innerHTML = yearlyValues[4].yerPage;

    }

};