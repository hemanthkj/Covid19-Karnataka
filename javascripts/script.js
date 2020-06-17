var config_data = {
    colors: {
        cfmd: "#ff083b",
        actv: "#017cff",
        rcvd: "#29a746",
        decd: "#6d767e"
    },
    bg_colors: {
        cfmd: "rgb(255, 230, 235)",
        actv: "rgb(239, 247, 255)",
        rcvd: "rgb(228, 244, 232)",
        decd: "rgb(246, 246, 247)"
    },
    labels: {
        appTitle: { eng: "COVID-19 KARNATAKA", "kan": "ಕೋವಿಡ್-19 ಕರ್ನಾಟಕ" },
        kan: 'ಕನ್ನಡ',
        eng: 'English',
        district: { eng: "District", "kan": "ಜಿಲ್ಲೆ" },
        cfmd: { eng: "Confirmed", "kan": "ಸೋಂಕಿತರು" },
        actv: { eng: "Active", "kan": "ಸಕ್ರಿಯರು" },
        rcvd: { eng: "Recovered", "kan": "ಗುಣಮುಖರು" },
        decd: { eng: "Deceased", "kan": "ಮೃತಪಟ್ಟವರು" },
        "all districts": { eng: "All Districts", "kan": "ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳು" },
        udupi: { eng: "Udupi", "kan": "ಉಡುಪಿ" },
        kalaburagi: { eng: "Kalaburagi", "kan": "ಕಲಬುರಗಿ" },
        "bengaluru": { eng: "Bengaluru", "kan": "ಬೆಂಗಳೂರು" },
        "bengaluru urban": { eng: "Bengaluru Urban", "kan": "ಬೆಂಗಳೂರು ನಗರ" },
        yadgir: { eng: "Yadagiri", "kan": "ಯಾದಗಿರಿ" },
        raichur: { eng: "Raichur", "kan": "ರಾಯಚೂರು" },
        mandya: { eng: "Mandya", "kan": "ಮಂಡ್ಯ" },
        belagavi: { eng: "Belagavi", "kan": "ಬೆಳಗಾವಿ" },
        bidar: { eng: "Bidar", "kan": "ಬೀದರ್" },
        hassan: { eng: "Hassan", "kan": "ಹಾಸನ" },
        vijayapura: { eng: "Vijayapura", "kan": "ವಿಜಯಪುರ" },
        davanagere: { eng: "Davanagere", "kan": "ದಾವಣಗೆರೆ" },
        chikkaballapura: { eng: "Chikkaballapura", "kan": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ" },
        "dakshina kannada": { eng: "Dakshina Kannada", "kan": "ದಕ್ಷಿಣ ಕನ್ನಡ" },
        mysuru: { eng: "Mysuru", "kan": "ಮೈಸೂರು" },
        "uttara kannada": { eng: "Uttara Kannada", "kan": "ಉತ್ತರ ಕನ್ನಡ" },
        bagalkote: { eng: "Bagalkote", "kan": "ಬಾಗಲಕೋಟೆ" },
        ballari: { eng: "Ballari", "kan": "ಬಳ್ಳಾರಿ" },
        dharwad: { eng: "Dharwad", "kan": "ಧಾರವಾಡ" },
        shivamogga: { eng: "Shivamogga", "kan": "ಶಿವಮೊಗ್ಗ" },
        chitradurga: { eng: "Chitradurga", "kan": "ಚಿತ್ರದುರ್ಗ" },
        gadag: { eng: "Gadag", "kan": "ಗದಗ" },
        "other state": { eng: "Other State", "kan": "ಇತರೆ ರಾಜ್ಯ" },
        tumakuru: { eng: "Tumakuru", "kan": "ತುಮಕೂರು" },
        "bengaluru rural": { eng: "Bengaluru Rural", "kan": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ" },
        kolar: { eng: "Kolar", "kan": "ಕೋಲಾರ" },
        haveri: { eng: "Haveri", "kan": "ಹಾವೇರಿ" },
        chikkamagaluru: { eng: "Chikkamagaluru", "kan": "ಚಿಕ್ಕಮಗಳೂರು" },
        koppal: { eng: "Koppal", "kan": "ಕೊಪ್ಪಳ" },
        ramanagara: { eng: "Ramanagara", "kan": "ರಾಮನಗರ" },
        kodagu: { eng: "Kodagu", "kan": "ಕೊಡಗು" },
        chamarajanagara: { eng: "Chamarajanagara", "kan": "ಚಾಮರಾಜನಗರ" },
        beginning: { eng: "Beginning", "kan": "ಆರಂಭದಿಂದ" },
        one_month: { eng: "1 Month", "kan": "ಒಂದು ತಿಂಗಳು" },
        one_week: { eng: "1 Week", "kan": "ಒಂದು ವಾರ" },
        "spread trends": { eng: "Spread Trends", "kan": "ವಿಸ್ತರಿಸಿದ ಪ್ರವೃತ್ತಿ" },
        "district-wise details": { eng: "District-wise Details", "kan": "ಜಿಲ್ಲಾವಾರು ವಿವರಗಳು" }
    },
    perc_info: {
        actv_rate: {
            title: { eng: "Active", kan: "ಸಕ್ರಿಯರು" },
            desc: { eng: "For every 100 confirmed cases, {num} are currently infected.", kan: "ಪ್ರತಿ 100 ದೃಡಪಡಿಸಲಾದ ಪ್ರಕರಣಗಳಲ್ಲಿ, {num} ಮಂದಿ ಪ್ರಸ್ತುತ ಸೋಂಕಿಗೆ ಒಳಗಾಗಿದ್ದಾರೆ." },
        },
        rcvd_rate: {
            title: { eng: "Recovery Rate", kan: "ಗುಣಮುಖರು" },
            desc: { eng: "For every 100 confirmed cases, {num} have recovered from the virus.", kan: "ಪ್ರತಿ 100 ದೃಡಪಡಿಸಲಾದ ಪ್ರಕರಣಗಳಲ್ಲಿ, {num} ಮಂದಿ ಗುಣಮುಖರಾಗಿದ್ದಾರೆ." },
        },
        decd_rate: {
            title: { eng: "Mortality Rate", kan: "ಮೃತಪಟ್ಟವರ ಪ್ರಮಾಣ" },
            desc: { eng: "For every 100 confirmed cases, {num} have unfortunately passed away from the virus.", kan: "ಪ್ರತಿ 100 ದೃಡಪಡಿಸಲಾದ ಪ್ರಕರಣಗಳಲ್ಲಿ, {num} ಮಂದಿ ಮೃತಪಟ್ಟಿದ್ದಾರೆ." },
        },
        avg_growth_rate: {
            title: { eng: "Avg. Growth Rate", kan: "ಸರಾಸರಿ ಬೆಳವಣಿಗೆಯ ಪ್ರಮಾಣ" },
            desc: { eng: "In the last one week, the number of new infections has grown by an average of {num} every day.", kan: "ಕಳೆದ ಒಂದು ವಾರದಲ್ಲಿ, ಹೊಸ ಸೋಂಕುಗಳ ಸಂಖ್ಯೆ ಪ್ರತಿದಿನ ಸರಾಸರಿ {num} ರಷ್ಟು ಹೆಚ್ಚಾಗಿದೆ." },
        }
    }

};
var selectedLanguageCode = 'kan';
var data_api = {
    "url": "https://api.covid19india.org/data.json",
    "method": "GET",
    "timeout": 0,
};
var state_district_wise_api = {
    "url": "https://api.covid19india.org/v2/state_district_wise.json",
    "method": "GET",
    "timeout": 0,
};
var states_daily_api = {
    "url": "https://api.covid19india.org/states_daily.json",
    "method": "GET",
    "timeout": 0,
};

var districts_daily_api = {
    "url": "https://api.covid19india.org/districts_daily.json",
    "method": "GET",
    "timeout": 0,
};

window.onscroll = function () { onScrollFunction() };

function onScrollFunction() {
    var section1 = document.getElementById("section-1");
    var sticky = section1.offsetTop;
    if (window.pageYOffset > sticky) {
        section1.classList.add("sticky");
    } else {
        section1.classList.remove("sticky");
    }
}

// var stats_data = stats_data;
// var state_district_wise = state_district_wise;
// var states_daily = states_daily;
// var districtsDaily = createDailyChangesDataForDistrict('Karnataka', 'Mandya', districtsDailyData['districtsDaily'])
var district_wise_table;
var currentGraphData;
var currentGraphLoc;
var stats_data;
var state_district_wise;
var states_daily;
var districtsDailyData;
var today = new Date();
$(document).ready(function () {
    $.ajax(data_api).done(function (r1) {
        const s_x = r1["statewise"].filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
        stats_data = new State(s_x);
        $.ajax(states_daily_api).done(function (r2) {
            states_daily = createDailyChangesDataForState('ka', r2['states_daily']);
            $.ajax(districts_daily_api).done(function (r3) {
                // districtsDailyData = createDailyChangesDataForDistrict('Karnataka', 'Mandya', districtsDailyData['districtsDaily'])
                districtsDailyData = r3;
                $.ajax(state_district_wise_api).done(function (r4) {
                    state_district_wise = r4.filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
                    // let d_y = state_district_wise['districtData'].map((a) => { return new District(stats_data, a, selectedLanguageCode) });
                    insertContentIntoPage(stats_data, states_daily, state_district_wise, selectedLanguageCode);
                });
            });
        });
    });
    // let d_y = state_district_wise['districtData'].map((a) => { return new District(stats_data, a, selectedLanguageCode) });
    // insertContentIntoPage(stats_data, states_daily, state_district_wise, selectedLanguageCode);
    // createDailyChangesDataForDistrict('Karnataka', 'Mandya', districtsDailyData['districtsDaily'])
})


function insertContentIntoPage(stats, sDaily, sDistrictWise, lCode) {
    $('head title').text(config_data.labels.appTitle[lCode]);
    $('#n-title').text(config_data.labels.appTitle[lCode]);
    $('#ld-label').text(config_data.labels[lCode]);
    createSection1(stats, lCode);
    createSection2(stats, sDaily, lCode);
    currentGraphData = sDaily;
    currentGraphLoc = 'all districts';
    createGraphFilters(Object.keys(districtsDailyData['districtsDaily']['Karnataka']))
    createSection3(sDaily, lCode);
    createSection4(stats, sDistrictWise, lCode);
    createFooter();
}

function createSection1(y, lCode) {
    let d = `<div id="confirmed">
                <div id="c-header">
                    <span class="title">${config_data.labels.cfmd[lCode]}</span>
                </div>
                <div id="c-content">
                    <span class="t_count">${y.confirmed.t_count}</span>
                    <span class="i_count">[+${y.confirmed.i_count}]</span>
                </div>
            </div>
            <div id="active">
                <div id="a-header">
                    <span class="title">${config_data.labels.actv[lCode]}</span>
                </div>
                <div id="a-content">
                    <span class="t_count">${y.active.t_count}</span>
                    <span class="i_count">${ Math.sign(y.active.i_count) == -1 ? '[-' + Math.abs(y.active.i_count) + ']' : '[+' + y.active.i_count + ']'}</span>
                </div>
            </div>
            <div id="recovered">
                <div id="r-header">
                    <span class="title">${config_data.labels.rcvd[lCode]}</span>
                </div>
                <div id="r-content">
                    <span class="t_count">${y.recovered.t_count}</span>
                    <span class="i_count">[+${y.recovered.i_count}]</span>
                </div>
            </div>
            <div id="deceased">
                <div id="d-header">
                    <span class="title">${config_data.labels.decd[lCode]}</span>
                </div>
                <div id="d-content">
                    <span class="t_count">${y.deceased.t_count}</span>
                    <span class="i_count">[+${y.deceased.i_count}]</span>
                </div>
            </div>`
    $('#section-1').html(d);
};

function createSection2(stats, sDaily, lCode) {

    let sevenDayBefore = new Date().setDate(new Date().getDate() - 7);
    let sdbd = sDaily[formatDate(sevenDayBefore, 'dd-mmm-yy')]; // Seven Day Before Data
    let sdbp = formatDate(today, 'dd mmm yyyy') + ' - ' + formatDate(sevenDayBefore, 'dd mmm yyyy'); // Seven Day Before Period
    // console.log(sdbd);
    console.log(stats.recovered.perc)
    console.log(Math.round(stats.recovered.perc));

    let avg_growth_rate = (((stats.confirmed.t_count - sdbd.t_confirmed) / sdbd.t_confirmed) * 100) / 7;
    var perc_info_1 = `<div id="active-rate">
                            <div>${config_data.perc_info.actv_rate.title[lCode]}</div>
                            <div>${stats.active.perc.toFixed(2)}%</div>
                            <div>${config_data.perc_info.actv_rate.desc[lCode].replace('{num}', Math.round(stats.active.perc))}</div>
                        </div>
                        <div id="recovery-rate">
                            <div>${config_data.perc_info.rcvd_rate.title[lCode]}</div>
                            <div>${stats.recovered.perc.toFixed(2)}%</div>
                            <div>${config_data.perc_info.rcvd_rate.desc[lCode].replace('{num}', Math.round(stats.recovered.perc))}</div>
                        </div>`
    var perc_info_2 = `<div id="mortality-rate">
                            <div>${config_data.perc_info.decd_rate.title[lCode]}</div>
                            <div>${stats.deceased.perc.toFixed(2)}%</div>
                            <div>${config_data.perc_info.decd_rate.desc[lCode].replace('{num}', Math.round(stats.deceased.perc))}</div>
                        </div>
                        <div id="avg-growth-rate">
                            <div>${config_data.perc_info.avg_growth_rate.title[lCode]}</div>
                            <div>${Math.round(avg_growth_rate)}%</div>
                            <div>${sdbp}</div>
                            <div>${config_data.perc_info.avg_growth_rate.desc[lCode].replace('{num}', Math.round(avg_growth_rate) + '%')}</div>
                        </div>`
    $('#section-2').html(`<div id="perc-info-0">${perc_info_1 + perc_info_2}</div><div id="perc-info-1">${perc_info_1}</div><div id="perc-info-2">${perc_info_2}</div>`);
}

function createGraphFilters(districts) {
    let options = '';
    districts.forEach(element => {
        options += `<option value="${element}">${config_data['labels'][element.toLowerCase()] ? config_data['labels'][element.toLowerCase()][selectedLanguageCode] : element}</option>`;
    });
    let data = `<div>${config_data['labels']['spread trends'][selectedLanguageCode]}</div>
                <div id="g-filter">
                    <span id="g-district-filter">
                        <select onchange="onChangeDistrict(event)">
                            <option value="All Districts">${config_data.labels['all districts'][selectedLanguageCode]}</option>
                            ${options}
                        </select>
                    </span>
                    <span id="g-date-filter">
                        <span id="beginning" class="active-df" onclick="onClickGDateFilter('beginning')">${config_data.labels.beginning[selectedLanguageCode]}</span>
                        <span id="one_month" onclick="onClickGDateFilter('one_month')">${config_data.labels.one_month[selectedLanguageCode]}</span>
                        <span id="one_week" onclick="onClickGDateFilter('one_week')">${config_data.labels.one_week[selectedLanguageCode]}</span>
                    </span>
                </div>`
    $('#graphFilters').html(data);
}

function createSection3(sDaily, lCode) {
    let dates = Object.keys(sDaily);
    let rows_data = {
        cfmd: [],
        actv: [],
        rcvd: [],
        decd: []
    };
    let max_value = {
        cfmd: sDaily[dates[0]]['t_confirmed'],
        actv: sDaily[dates[0]]['t_active'],
        rcvd: sDaily[dates[0]]['t_recovered'],
        decd: sDaily[dates[0]]['t_deceased']
    };

    let min_value = {
        cfmd: sDaily[dates[0]]['t_confirmed'],
        actv: sDaily[dates[0]]['t_active'],
        rcvd: sDaily[dates[0]]['t_recovered'],
        decd: sDaily[dates[0]]['t_deceased']
    }
    for (let i = 0; i < dates.length; i++) {
        const element = dates[i];
        rows_data.cfmd.push([
            new Date(element),
            sDaily[element]['t_confirmed'],
            createCustomHTMLContent('cfmd', element, sDaily[element]['t_confirmed'], sDaily[element]['confirmed'])
        ])
        rows_data.actv.push([
            new Date(element),
            sDaily[element]['t_active'],
            createCustomHTMLContent('actv', element, sDaily[element]['t_active'], sDaily[element]['active'])
        ])
        rows_data.rcvd.push([
            new Date(element),
            sDaily[element]['t_recovered'],
            createCustomHTMLContent('rcvd', element, sDaily[element]['t_recovered'], sDaily[element]['recovered'])
        ])
        rows_data.decd.push([
            new Date(element),
            sDaily[element]['t_deceased'],
            createCustomHTMLContent('decd', element, sDaily[element]['t_deceased'], sDaily[element]['deceased'])
        ])
        if (max_value.cfmd < sDaily[element]['t_confirmed']) max_value.cfmd = sDaily[element]['t_confirmed'];
        if (max_value.actv < sDaily[element]['t_active']) max_value.actv = sDaily[element]['t_active'];
        if (max_value.rcvd < sDaily[element]['t_recovered']) max_value.rcvd = sDaily[element]['t_recovered'];
        if (max_value.decd < sDaily[element]['t_deceased']) max_value.decd = sDaily[element]['t_deceased'];

        if (min_value.cfmd > sDaily[element]['t_confirmed']) min_value.cfmd = sDaily[element]['t_confirmed'];
        if (min_value.actv > sDaily[element]['t_active']) min_value.actv = sDaily[element]['t_active'];
        if (min_value.rcvd > sDaily[element]['t_recovered']) min_value.rcvd = sDaily[element]['t_recovered'];
        if (min_value.decd > sDaily[element]['t_deceased']) min_value.decd = sDaily[element]['t_deceased'];
    }
    createDailyChangesGraph(rows_data.cfmd, getLineChartColumns('cfmd', lCode), 'dcg-confirmed', getLineChartOptions('cfmd', max_value.cfmd, min_value.cfmd));
    createDailyChangesGraph(rows_data.actv, getLineChartColumns('actv', lCode), 'dcg-active', getLineChartOptions('actv', max_value.actv, min_value.actv));
    createDailyChangesGraph(rows_data.rcvd, getLineChartColumns('rcvd', lCode), 'dcg-recovered', getLineChartOptions('rcvd', max_value.rcvd, min_value.rcvd));
    createDailyChangesGraph(rows_data.decd, getLineChartColumns('decd', lCode), 'dcg-deceased', getLineChartOptions('decd', max_value.decd, min_value.decd));
}

function createSection4(statsData, sDistrictWise, lCode) {
    $('#s4-header').text(config_data.labels['district-wise details'][lCode]);
    console.log(sDistrictWise)
    let data = sDistrictWise['districtData'].map((a) => { return new District(statsData, a, lCode) }).sort((a, b) => { return a.confirmed['t_count'] - b.confirmed['t_count'] });
    console.log(data)
    district_wise_table = $('#dw-table-info').DataTable({
        data: data,
        columns: [
            { data: "district", title: config_data.labels.district[lCode] },
            { data: "confirmed.t_count", title: config_data.labels.cfmd[lCode] },
            { data: "active.t_count", title: config_data.labels.actv[lCode] },
            { data: "recovered.t_count", title: config_data.labels.rcvd[lCode] },
            { data: "deceased.t_count", title: config_data.labels.decd[lCode] },
            { data: "confirmed.perc", title: config_data.labels.cfmd[lCode] + ' (%)' }
        ],
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        fixedColumns: true,
        autoWidth: true,
        "order": [[1, "desc"]],
        "language": {
            "search": '',
            "searchPlaceholder": "Search",

        },
    });
}

function createFooter() {
    let data = `<footer id="footer">
                    <div id="source">
                        <div>Data Source</div>
                        <div onclick="onclicksource()"><img src="./images/cloud_api.png" height="27px"
                                width="27px">api.covid19india.org</div>
                    </div>
                    <div id="contact-info">
                        <div>Developed by Hemanth K J</div>
                    </div>
                </footer>`
    $('#footerContainer').html(data);
}

function createDailyChangesDataForState(statecode, d) {
    let data = {};
    let overall = {
        confirmed: 0,
        active: 0,
        recovered: 0,
        deceased: 0,
    };
    for (let i = 0; i < d.length; i++) {
        const element = d[i];
        if (!Object.keys(data).includes(element.date)) {
            data[element.date] = {
                confirmed: 0,
                t_confirmed: 0,
                active: 0,
                t_active: 0,
                recovered: 0,
                t_recovered: 0,
                deceased: 0,
                t_deceased: 0
            }
        }
        data[element.date][element.status.toLowerCase()] = parseInt(element[statecode.toLowerCase()]);
        overall[element.status.toLowerCase()] += parseInt(element[statecode.toLowerCase()]);
        data[element.date]['t_' + element.status.toLowerCase()] = overall[element.status.toLowerCase()];
        data[element.date]['active'] = data[element.date]['confirmed'] - data[element.date]['recovered'] - data[element.date]['deceased'];
        overall['active'] = overall['confirmed'] - overall['recovered'] - overall['deceased'];
        data[element.date]['t_active'] = overall['active'];
    }
    return data;
};

function createDailyChangesDataForDistrict(state, district, dDailyData) {
    let d = dDailyData[state][district];
    console.log(d)
    let data = {};
    let prev_data = {
        confirmed: 0,
        active: 0,
        recovered: 0,
        deceased: 0,
    };
    for (let i = 0; i < d.length; i++) {
        const element = d[i];
        data[element.date] = {
            confirmed: element.confirmed - prev_data.confirmed,
            t_confirmed: element.confirmed,
            active: element.active - prev_data.active,
            t_active: element.active,
            recovered: element.recovered - prev_data.recovered,
            t_recovered: element.recovered,
            deceased: element.deceased - prev_data.deceased,
            t_deceased: element.deceased
        }
        prev_data = element;
    }
    console.log(data);

    return data;
};

function createDailyChangesGraph(rows, columns, domId, options) {
    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(drawBasic);
    function drawBasic() {
        var data = new google.visualization.DataTable();
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            data.addColumn(column);
        }
        data.addRows(rows);
        var chart = new google.visualization.LineChart(document.getElementById(domId));
        chart.draw(data, options);
    }
}

function getLineChartOptions(type, max_val, min_val) {
    let options = { "chartArea": { "backgroundColor": config_data['bg_colors'][type], "left": 50, "right": 20, "top": 50, "bottom": 50, "width": "90%", "height": "70%" }, "backgroundColor": { "fill": config_data['bg_colors'][type] }, "colors": [config_data['colors'][type]], "legend": { "position": "top", "alignment": "center", "maxLines": 1 }, "tooltip": { "isHtml": true }, "vAxis": { "gridlines": { "count": 0 }, "viewWindow": { "max": max_val, "min": min_val } }, "hAxis": { "gridlines": { "color": config_data['bg_colors'][type] }, "format": "d MMM" }, "pointSize": 2 };
    return options;
}

function getLineChartColumns(type, lCode) {
    let columns = [
        {
            type: 'date',
            label: 'Date'
        },
        {
            type: 'number',
            label: config_data.labels[type]['eng']
        },
        { 'type': 'string', 'role': 'tooltip', 'p': { 'html': true } }
    ]
    return columns;
}

function createCustomHTMLContent(v, d, t, n) {
    return `<div style="padding:10px;font-family:sans-serif;letter-spacing: .02em;">
            <div style="font-size:14px;font-weight:700;margin-bottom:5px;color:black;">${formatDate(d, 'mmm dd, yyyy')}</div>
            <div><span style="font-size:18px;font-weight:700;margin-right:7px;color:${config_data['colors'][v]};">${t}</span><span style="font-size:13px;font-weight:700;color:${config_data['colors'][v]}">${Math.sign(n) == -1 ? '<span class="fa fa-long-arrow-down" style="font-size:12px;margin-right:2px;"></span>' + Math.abs(n) : '<span class="fa fa-long-arrow-up" style="font-size:12px;margin-right:2px;"></span>' + n}</span></div>
            </div>`;
}

function formatDate(date, f) {
    let format = f;
    if (!new Date(date)) {
        return new Date(date)
    } else if (!format) {
        throw new Error('format is required !!');
    } else {
        const m_r = /m{1,}/i;
        const d_r = /d{1,}/i;
        const y_r = /y{1,}/i;
        let mr_o = format.match(m_r);
        let dr_o = format.match(d_r);
        let yr_o = format.match(y_r);
        if (mr_o && dr_o && yr_o) {
            if (dr_o[0].length == 1 || dr_o[0].length == 2) {
                format = format.replace(dr_o[0], new Date(date).toDateString().split(' ')[2]);
            } else if (dr_o[0].length == 3) {
                format = format.replace(dr_o[0], new Date(date).toDateString().split(' ')[0]);
            } else {
                throw new Error('Invalid date format !!')
            }
            if (mr_o[0].length == 1 || mr_o[0].length == 2) {
                format = format.replace(mr_o[0], new Date(date).toISOString().split('-')[1]);
            } else if (mr_o[0].length == 3) {
                format = format.replace(mr_o[0], new Date(date).toDateString().split(' ')[1]);
            } else {
                throw new Error('Invalid month format !!')
            }
            if (yr_o[0].length == 2) {
                format = format.replace(yr_o[0], new Date(date).getFullYear().toString().slice(2));
            } else if (yr_o[0].length == 4) {
                format = format.replace(yr_o[0], new Date(date).getFullYear());
            } else {
                throw new Error('Invalid year format !!')
            }
            return format;
        } else {
            throw new Error('Invalid display format requested !!');
        }
    }
}

function showActionsDropdown() {
    var y = document.getElementById(`actions-content`);
    if (y.style.display == "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
    var body = document.getElementById('body');
    if (!body["click_listener"]) {
        body["click_listener"] = true;
        body.addEventListener('click', (e) => {
            let id = e.target["id"];
            if (typeof (id) == 'string' && id.split('_')[0] != 'ld-label') {
                let x = document.getElementById(`actions-content`);
                if (x) x.style.display = "none";
            }
        })
    }
};

function onChangeLanguage(lCode) {
    if (selectedLanguageCode !== lCode) {
        selectedLanguageCode = lCode;
        district_wise_table.destroy();
        insertContentIntoPage(stats_data, states_daily, state_district_wise, selectedLanguageCode);
    }
};

function onChangeDistrict(e) {
    console.log(e.target['value']);
    if (e.target['value'].toLowerCase() !== currentGraphLoc) {
        $(`#g-date-filter #beginning`).removeClass('active-df');
        $(`#g-date-filter #one_month`).removeClass('active-df');
        $(`#g-date-filter #one_week`).removeClass('active-df');
        $(`#g-date-filter #beginning`).addClass('active-df');
        if (e.target['value'].toLowerCase() == 'all districts') {
            currentGraphData = states_daily;
            currentGraphLoc = e.target['value'].toLowerCase();
            createSection3(currentGraphData, selectedLanguageCode);
        } else {
            let data = createDailyChangesDataForDistrict('Karnataka', e.target['value'], districtsDailyData['districtsDaily']);
            currentGraphData = data;
            currentGraphLoc = e.target['value'].toLowerCase();
            createSection3(currentGraphData, selectedLanguageCode);
        }
    }

}

function onClickGDateFilter(val) {
    $(`#g-date-filter #beginning`).removeClass('active-df');
    $(`#g-date-filter #one_month`).removeClass('active-df');
    $(`#g-date-filter #one_week`).removeClass('active-df');
    $(`#g-date-filter #${val}`).addClass('active-df');
    createSection3(applyDateFilter(currentGraphData, val), selectedLanguageCode)
}

function applyDateFilter(y, f) {
    let filteredData = {};
    const dates = Object.keys(y).sort((a, b) => { new Date(a) - new Date(b) });
    let dateRange = { min: dates[0], max: dates[dates.length - 1] };
    switch (f) {
        case 'one_month':
            dateRange.min = new Date(dates[dates.length - 1]).setMonth(new Date(dates[dates.length - 1]).getMonth() - 1);
            break;
        case 'one_week':
            dateRange.min = new Date(dates[dates.length - 1]).setDate(new Date(dates[dates.length - 1]).getDate() - 7);
            break;
        case 'beginning':
            return y;
        default:
            return y;
    }
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        if ((new Date(date) >= dateRange.min)) {
            filteredData[date] = y[date];
        }
    }
    return filteredData;
}

function onclicksource() {
    window.open('https://api.covid19india.org/', '_blank')
}

function onclickContactInfo(a) {
    var y = document.getElementById(`developer-info`);
    if (y.style.display == "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

var State = function (d) {
    this.confirmed = {
        t_count: d.confirmed,
        i_count: d.deltaconfirmed
    };
    this.active = {
        t_count: d.active,
        i_count: d.deltaconfirmed - d.deltarecovered - d.deltadeaths,
        perc: ((d.active / d.confirmed) * 100)
    };
    this.recovered = {
        t_count: d.recovered,
        i_count: d.deltarecovered,
        perc: ((d.recovered / d.confirmed) * 100)
    };
    this.deceased = {
        t_count: d.deaths,
        i_count: d.deltadeaths,
        perc: ((d.deaths / d.confirmed) * 100)
    }
}

var District = function (sd, dd, lCode) {
    this.district = config_data.labels[dd.district.toLowerCase()] ? config_data.labels[dd.district.toLowerCase()][lCode] : dd.district;
    this.confirmed = {
        t_count: dd.confirmed,
        i_count: dd.delta.confirmed,
        perc: ((dd.confirmed / sd.confirmed.t_count) * 100).toFixed(2)
    };
    this.active = {
        t_count: dd.active,
        i_count: dd.delta.confirmed - dd.delta.recovered,
        perc: ((dd.active / sd.active.t_count) * 100).toFixed(2)
    };
    this.recovered = {
        t_count: dd.recovered,
        i_count: dd.delta.recovered,
        perc: ((dd.recovered / sd.recovered.t_count) * 100).toFixed(2)
    };
    this.deceased = {
        t_count: dd.deceased,
        i_count: dd.delta.deceased,
        perc: ((dd.deceased / sd.deceased.t_count) * 100).toFixed(2)
    }
}