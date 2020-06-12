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
        udupi: { eng: "Udupi", "kan": "ಉಡುಪಿ" },
        kalaburagi: { eng: "Kalaburagi", "kan": "ಕಲಬುರಗಿ" },
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
        chamarajanagara: { eng: "Chamarajanagara", "kan": "ಚಾಮರಾಜನಗರ" }
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

var district_wise_table;
var selectedLanguageCode = 'kan';

var total_numbers_info = {
    "url": "https://api.covid19india.org/data.json",
    "method": "GET",
    "timeout": 0,
};

var state_district_wise = {
    "url": "https://api.covid19india.org/v2/state_district_wise.json",
    "method": "GET",
    "timeout": 0,
};

var states_daily_changes = {
    "url": "https://api.covid19india.org/states_daily.json",
    "method": "GET",
    "timeout": 0,
};

$(document).ready(function () {
    console.log('75');
    plotEverything(selectedLanguageCode);
})

function plotEverything(langCode) {
    $.ajax(total_numbers_info).done(function (response) {
        const s_x = response["statewise"].filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
        const s_y = new State(s_x.confirmed, s_x.deltaconfirmed, s_x.active, s_x.deltaconfirmed - s_x.deltarecovered - s_x.deltadeaths, s_x.recovered, s_x.deltarecovered, s_x.deaths, s_x.deltadeaths);
        // console.log(s_y);
        // console.log(formatDate(new Date().setDate(new Date().getDate() - 7), 'dd-mmm-yy'));

        createTotalNoInfo(s_y, langCode);
        $.ajax(states_daily_changes).done(function (response) {
            let y = createDailyChangesDataForState('ka', response['states_daily']);
            // console.log(y);
            let today = new Date();
            let sevenDayBefore = new Date().setDate(new Date().getDate() - 7);
            // console.log(formatDate(today, 'dd mmm yyyy'));
            // console.log(formatDate(sevenDayBefore, 'dd mmm yyyy'));

            let sevenDayBeforeData = y[formatDate(sevenDayBefore, 'dd-mmm-yy')];
            let sevenDayBeforePeriod = formatDate(today, 'dd mmm yyyy') + ' - ' + formatDate(sevenDayBefore, 'dd mmm yyyy');
            // console.log();
            createPercInfo(s_y, sevenDayBeforeData, sevenDayBeforePeriod, langCode);
            let dates = Object.keys(y);
            let rows_data = {
                cfmd: [],
                actv: [],
                rcvd: [],
                decd: []
            };
            let max_value = {
                cfmd: 0,
                actv: 0,
                rcvd: 0,
                decd: 0
            };
            for (let i = 0; i < dates.length; i++) {
                const element = dates[i];
                // rows_data.push([
                //     new Date(element),
                //     y[element]['confirmed'],
                //     y[element]['active'],
                //     y[element]['recovered'],
                //     y[element]['deceased'],
                // ])
                rows_data.cfmd.push([
                    new Date(element),
                    y[element]['t_confirmed'],
                    createCustomHTMLContent('cfmd', element, y[element]['t_confirmed'], y[element]['confirmed'])
                ])
                rows_data.actv.push([
                    new Date(element),
                    y[element]['t_active'],
                    createCustomHTMLContent('actv', element, y[element]['t_active'], y[element]['active'])
                ])
                rows_data.rcvd.push([
                    new Date(element),
                    y[element]['t_recovered'],
                    createCustomHTMLContent('rcvd', element, y[element]['t_recovered'], y[element]['recovered'])
                ])
                rows_data.decd.push([
                    new Date(element),
                    y[element]['t_deceased'],
                    createCustomHTMLContent('decd', element, y[element]['t_deceased'], y[element]['deceased'])
                ])
                if (max_value.cfmd < y[element]['t_confirmed']) max_value.cfmd = y[element]['t_confirmed'];
                if (max_value.actv < y[element]['t_active']) max_value.actv = y[element]['t_active'];
                if (max_value.rcvd < y[element]['t_recovered']) max_value.rcvd = y[element]['t_recovered'];
                if (max_value.decd < y[element]['t_deceased']) max_value.decd = y[element]['t_deceased'];
            }
            // new1
                        var trace1 = {
			  x: rows_data.cfmd.map((a)=>{return a[0]}),
			  y: rows_data.cfmd.map((a)=>{return a[1]}),
			  mode: 'lines+markers',
			  line: {
				  color : config_data.colors['cfmd']
			  },
			  marker: {
				  size: 4,
//				  symbol: 'circle-open',
//				  opacity: 1
			  },
			  name: 'Confirmed'
			};
			
            var layout = {
//            		title: 'Quarter 1 Growth',
//             		font: {
//                         family: 'monospace',
//                         size: 12

//                     },
            		height: 200,
            		xaxis: {
//            			title: 'Date',
            			type : 'date',
            			showgrid: false,
            			zeroline: true,
//            			color : config_data.colors['cfmd']
            		},
	        		yaxis: {
//	        			title: 'Percent',
	        		    showline: true,
	        			showgrid: false,
//	        			zeroline: true,
//	        			color : config_data.colors['cfmd']
	        		},
	        		margin : {
	        			l: 45,
	        			r: 20,
	        			t: 20,
	        			b: 30,
	        			autoexpand : false
	        			
	        		},
	        		autosize : true,
	        		paper_bgcolor: config_data.bg_colors['cfmd'],
	        		plot_bgcolor: config_data.bg_colors['cfmd']
    		};
            
            var data = [trace1];

            Plotly.newPlot('dcg-confirmed2', data, layout, {displayModeBar: false});
            // new

            createDailyChangesGraph(rows_data.cfmd, getLineChartColumns('cfmd', langCode), 'dcg-confirmed', getLineChartOptions('cfmd', max_value.cfmd));
            createDailyChangesGraph(rows_data.actv, getLineChartColumns('actv', langCode), 'dcg-active', getLineChartOptions('actv', max_value.actv));
            createDailyChangesGraph(rows_data.rcvd, getLineChartColumns('rcvd', langCode), 'dcg-recovered', getLineChartOptions('rcvd', max_value.rcvd));
            createDailyChangesGraph(rows_data.decd, getLineChartColumns('decd', langCode), 'dcg-deceased', getLineChartOptions('decd', max_value.decd));
            $.ajax(state_district_wise).done(function (response) {
                const d_x = response.filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
                const d_y = d_x['districtData'].map((a) => { return new District(s_y, a, langCode) });
                createTable(d_y, langCode)
            });
        });
    });
}

function createTotalNoInfo(y, langCode) {
    //
    $('#confirmed .header .title').text(config_data.labels.cfmd[langCode]);
    $('#confirmed .content .t_count').text(y.confirmed.t_count);
    $('#confirmed .content .i_count').text(`[+${y.confirmed.i_count}]`);
    //
    $('#active .header .title').text(config_data.labels.actv[langCode]);
    $('#active .content .t_count').text(y.active.t_count);
    if (Math.sign(y.active.i_count) == -1) $('#active .content .i_count').text(`[-${Math.abs(y.active.i_count)}]`);
    else $('#active .content .i_count').text(`[+${y.active.i_count}]`);
    $('#active .header .perc').text(`${y.active.perc}%`);
    $('#active .content .perc2').text(`(${y.active.perc}%)`);
    //
    $('#recovered .header .title').text(config_data.labels.rcvd[langCode]);
    $('#recovered .content .t_count').text(y.recovered.t_count);
    $('#recovered .content .i_count').text(`[+${y.recovered.i_count}]`);
    $('#recovered .header .perc').text(`${y.recovered.perc}%`);
    $('#recovered .content .perc2').text(`(${y.recovered.perc}%)`);
    //
    $('#deceased .header .title').text(config_data.labels.decd[langCode]);
    $('#deceased .content .t_count').text(y.deceased.t_count);
    $('#deceased .content .i_count').text(`[+${y.deceased.i_count}]`);
    $('#deceased .header .perc').text(`${y.deceased.perc}%`);
    $('#deceased .content .perc2').text(`(${y.deceased.perc}%)`);
};

function createPercInfo(y, sdbd, sdbp, langCode) {
    $('#perc-info-0').empty();
    $('#perc-info-1').empty();
    $('#perc-info-2').empty();
    let avg_growth_rate = (((y.confirmed.t_count - sdbd.t_confirmed) / sdbd.t_confirmed) * 100) / 7;
    var perc_info_1 = `<div id="active-rate">
                            <div>${config_data.perc_info.actv_rate.title[langCode]}</div>
                            <div>${y.active.perc}%</div>
                            <div>${config_data.perc_info.actv_rate.desc[langCode].replace('{num}', Math.round(parseInt(y.active.perc)))}</div>
                        </div>
                        <div id="recovery-rate">
                            <div>${config_data.perc_info.rcvd_rate.title[langCode]}</div>
                            <div>${y.recovered.perc}%</div>
                            <div>${config_data.perc_info.rcvd_rate.desc[langCode].replace('{num}', Math.round(parseInt(y.recovered.perc)))}</div>
                        </div>`
    var perc_info_2 = `<div id="mortality-rate">
                            <div>${config_data.perc_info.decd_rate.title[langCode]}</div>
                            <div>${y.deceased.perc}%</div>
                            <div>${config_data.perc_info.decd_rate.desc[langCode].replace('{num}', Math.round(parseInt(y.deceased.perc)))}</div>
                        </div>
                        <div id="avg-growth-rate">
                            <div>${config_data.perc_info.avg_growth_rate.title[langCode]}</div>
                            <div>${Math.round(avg_growth_rate)}%</div>
                            <div>${sdbp}</div>
                            <div>${config_data.perc_info.avg_growth_rate.desc[langCode].replace('{num}', Math.round(avg_growth_rate) + '%')}</div>
                        </div>`
    $('#perc-info-0').append(perc_info_1 + perc_info_2);
    $('#perc-info-1').append(perc_info_1);
    $('#perc-info-2').append(perc_info_2);
}

function createTable(data, langCode) {
    console.log(data);

    district_wise_table = $('#dw-table-info').DataTable({
        data: data,
        columns: [
            { data: "district", title: config_data.labels.district[langCode] },
            { data: "confirmed.t_count", title: config_data.labels.cfmd[langCode] },
            { data: "active.t_count", title: config_data.labels.actv[langCode] },
            { data: "recovered.t_count", title: config_data.labels.rcvd[langCode] },
            { data: "deceased.t_count", title: config_data.labels.decd[langCode] },
            { data: "confirmed.perc", title: config_data.labels.cfmd[langCode] + ' (%)' }
        ],
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        fixedColumns: true,
        autoWidth: true,
        "language": {

            "search": '',
            "searchPlaceholder": "Search",

        },
        // "dom": 'lCfrtip',
        // "order": [],
        // "colVis": {
        //     "buttonText": "Hiển thị",
        //     "overlayFade": 0,
        //     "align": "right"
        // },
        // "language": {
        //     "lengthMenu": '_MENU_ bản ghi trên trang',
        //     "search": '',
        //     "searchPlaceholder": "search",
        //     "paginate": {
        //         "previous": '<i class="fa fa-angle-left"></i>',
        //         "next": '<i class="fa fa-angle-right"></i>'
        //     }
        // }
    });
}

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

function getLineChartOptions(type, max_val) {
    let options = { "chartArea": { "backgroundColor": config_data['bg_colors'][type], "left": 50, "right": 20, "top": 50, "bottom": 50, "width": "90%", "height": "70%" }, "backgroundColor": { "fill": config_data['bg_colors'][type] }, "colors": [config_data['colors'][type]], "legend": { "position": "top", "alignment": "center", "maxLines": 1 }, "tooltip": { "isHtml": true }, "vAxis": { "gridlines": { "count": 0 }, "viewWindow": { "max": max_val, "min": 0 } }, "hAxis": { "gridlines": { "color": config_data['bg_colors'][type] }, "format": "d MMM" }, "pointSize": 2 };
    return options;
}

function getLineChartColumns(type, langCode) {
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

function onclicksource() {
    window.open('https://api.covid19india.org/', '_blank')
}

function showActionsDropdown() {
    console.log('350');

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
            if (typeof (id) == 'string' && id.split('_')[0] != 'lng-drdn-label') {
                let x = document.getElementById(`actions-content`);
                if (x) x.style.display = "none";
            }
        })
    }
};

function onChangeLanguage(lngCode) {
    if (selectedLanguageCode !== lngCode) {
        selectedLanguageCode = lngCode;
        district_wise_table.destroy();
        plotEverything(selectedLanguageCode);
    }

};

var settings = {
    "url": "https://api.covid19india.org/raw_data1.json",
    "method": "GET",
    "timeout": 0,
};

// $.ajax(settings).done(function (response) {
//     // console.log(response);
//     var stateData = filterForStatesData(response['raw_data'], 'ka');
//     // console.log(stateData);
//     var obj = {};
//     for (let i = 0; i < stateData.length; i++) {
//         const element = stateData[i];
//         const keys = Object.keys(obj);
//         if (!Object.keys(obj).includes(element.statepatientnumber)) {
//             if (element.currentstatus.toLowerCase() == "recovered" || element.currentstatus.toLowerCase() == "deceased") {
//                 obj[element.statepatientnumber] = {
//                     status: element.currentstatus,
//                     dateannounced: element.dateannounced,
//                     statuschangedate: element.statuschangedate
//                 }
//             } else {
//                 obj[element.statepatientnumber] = {
//                     status: element.currentstatus,
//                     dateannounced: element.dateannounced,
//                     statuschangedate: null
//                 }
//             }

//         } else {
//             if (obj[element.statepatientnumber].status != element.currentstatus) {
//                 obj[element.statepatientnumber].statuschangedate = element.dateannounced;
//             }
//         }
//     }
//     // console.log(JSON.stringify(obj));

//     // fs.writeFileSync('data.json', JSON.stringify(stateData));
// });



// $.ajax(total_numbers_info).done(function (response) {
//     const x = response["statewise"].filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
//     // console.log(x);
//     const y = new stateInfo(x.confirmed, x.deltaconfirmed, x.active, x.deltaconfirmed - x.deltarecovered, x.recovered, x.deltarecovered, x.deaths, x.deltadeaths);
//     console.log(y);
//     $('#confirmed .content .t_count').text(y.confirmed.t_count);
//     $('#confirmed .content .i_count').text(`[+${ y.confirmed.i_count }]`);
//     $('#active .content .t_count').text(y.active.t_count);
//     if(Math.sign(y.active.i_count) == -1) $('#active .content .i_count').text(`[-${ Math.abs(y.active.i_count) }]`);
//     else $('#active .content .i_count').text(`[+${ y.active.i_count }]`);
//     $('#active .header .perc').text(`${ Math.round(y.active.perc) }% `);
//     $('#active .content .perc2').text(`(${ Math.round(y.active.perc) } %)`);
//     $('#recovered .content .t_count').text(y.recovered.t_count);
//     $('#recovered .content .i_count').text(`[+${ y.recovered.i_count }]`);
//     $('#recovered .header .perc').text(`${ Math.round(y.recovered.perc) }% `);
//     $('#recovered .content .perc2').text(`(${ Math.round(y.recovered.perc) } %)`);
//     $('#deceased .content .t_count').text(y.deceased.t_count);
//     $('#deceased .content .i_count').text(`[+${ y.deceased.i_count }]`);
//     $('#deceased .header .perc').text(`${ Math.round(y.deceased.perc) }% `);
//     $('#deceased .content .perc2').text(`(${ Math.round(y.deceased.perc) } %)`);
// });


var filterForStatesData = function (data, statecode) {
    // return data.map((x) => {
    //     if (x['statecode'].toLowerCase() == statecode.toLowerCase()) {
    //         return structureTheData(x);
    //     }
    // }).filter((x) => { return x });
    return data.filter((x) => { return x['statecode'].toLowerCase() == statecode.toLowerCase() });
}

var Patient = function (p_num, age, gender, district, status, h_date, r_date, state, notes) {
    this.number = p_num;
    this.age = age;
    this.gender = gender;
    this.status = status;
    this.hospitalizedDate = h_date;
    this.recoveredDate = r_date;
    this.district = district;
    this.state = state;
    this.notes = notes;
}

var State = function (c, dc, a, da, r, dr, d, dd) {
    this.confirmed = {
        t_count: c,
        i_count: dc
    };
    this.active = {
        t_count: a,
        i_count: da,
        perc: ((a / c) * 100).toFixed(2)
    };
    this.recovered = {
        t_count: r,
        i_count: dr,
        perc: ((r / c) * 100).toFixed(2)
    };
    this.deceased = {
        t_count: d,
        i_count: dd,
        perc: ((d / c) * 100).toFixed(2)
    }
}

var District = function (sd, dd, langCode) {
    this.district = config_data.labels[dd.district.toLowerCase()][langCode];
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
