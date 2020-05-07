// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

jQuery(function ($) {
    $('.version').click(function (e) {
        $(this).addClass('active').siblings('.version').removeClass('active');
    });

    $('.type').click(function (e) {
        $(this).addClass('active').siblings('.type').removeClass('active');
    });

    $('.state1').click(function (e) {
        $(this).addClass('active').siblings('.state1').removeClass('active');
    });
    $('.state2').click(function (e) {
        $(this).addClass('active').siblings('.state2').removeClass('active');
    });
    $('.state3').click(function (e) {
        $(this).addClass('active').siblings('.state3').removeClass('active');
    });

    $('.verElec').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typeta').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typetb').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typetc').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typepa').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typepb').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.typepc').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.statea').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.stateb').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.statec').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.magtype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.gastype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.vertype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.wirelesstype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.humtype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.humtypedis').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
            $("#humData").removeAttr("disabled");
        } else {
            $(this).addClass('active');
            $("#humData").attr("disabled", "true");
        }
    });

    $('.wiretype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.statez').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.metha').click(function (e) {
        $(this).addClass('active').siblings('.metha').removeClass('active');
    });

    $('.hydra').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.19ibd01l').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.fireSta').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.waterIn').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.mqtttype').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.gtwear').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.svwear').click(function (e) {
        var hasActive = $(this).hasClass('active');
        if (hasActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.mqttdata').click(function (e) {
        $(this).addClass('active').siblings('.mqttdata').removeClass('active');
    });

    $('.nbdetec').click(function (e) {
        $(this).addClass('active').siblings('.nbdetec').removeClass('active');
    });

    //提交操作
    $('#submit').click(function () {
        var flag = true;
        var mac = $('#mac').val();
        if (mac != '') {
            $.ajax({
                url: 'http://192.168.2.59:8080/info/device_data?mac=' + mac,
                async: false,
                success: function (res) {
                    if (res == '') {
                        $('#mainModal').modal('show');
                        flag = false;
                        setTimeout(function () {
                            location.reload();
                        }, 1000);
                    }
                }
            });
            if (!flag) return;

            //获取所有数据的值，转换成为16进制
            var states = [];
            if ($('#category').val() == 'smoke') {
                if ($('.version').hasClass('active')) {
                    states = [$('.state1.active').data('state'), $('.state2.active').data('state'), '0'];
                } else {
                    //拿到用户设置的值
                    let arr = [0, 0, 1];
                    $('.vertype').each(function () {
                        if ($(this).hasClass('active')) {
                            arr.push($(this).data('value'));
                        } else {
                            arr.push('0');
                        }
                    });

                    var batPer = $('#batPer').val() == '' ? '01100100' : parseInt($('#batPer').val()).toString(2).padStart(8, '0');
                    var smokePer = $('#smokePer').val() == '' ? '00000000' : parseInt($('#smokePer').val()).toString(2).padStart(8, '0');

                    states = ['00010011', arr.join(''), batPer, smokePer, '00000000', '00000000'];
                    console.log(states);
                }

            } else if ($('#category').val() == 'gas') {
                let arr = [];
                $('.gastype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    }
                });

                var fir = $('.gastype').eq(0).hasClass('active') ? $('.gastype').eq(0).data('value') : '00';
                var sec = $('.gastype').eq(1).hasClass('active') ? $('.gastype').eq(1).data('value') : '00';
                var third = $('.gastype').eq(2).hasClass('active') ? $('.gastype').eq(2).data('value') : '0';
                var fourth = $('.gastype').eq(3).hasClass('active') ? $('.gastype').eq(3).data('value') : '0';

                states = ['02', fir, parseInt(sec + "0000" + third + fourth, 2).toString(16).padStart(2, '0')];
                console.log(states);

            } else if ($('#category').val() == 'electronic') {
                let arr = [];
                $('.verElec').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                arr.push('1');
                var elecData = arr.join('');
                console.log(elecData);

                var data = '';
                if ($('#elecData').val() != '') {
                    data = parseInt($('#elecData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 50;
                    data = num.toString(2).padStart(12, '0');
                }
                elecData = parseInt((elecData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typeta').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                arr.push('0');
                var tempAData = arr.join('');
                if ($('#tempAData').val() != '') {
                    data = parseInt($('#tempAData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 333;
                    data = num.toString(2).padStart(12, '0');
                }
                tempAData = parseInt((tempAData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typetb').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                arr.push('0');
                var tempBData = arr.join('');
                if ($('#tempBData').val() != '') {
                    data = parseInt($('#tempBData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 333;
                    data = num.toString(2).padStart(12, '0');
                }
                tempBData = parseInt((tempBData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typetc').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                arr.push('0');
                var tempCData = arr.join('');
                if ($('#tempCData').val() != '') {
                    data = parseInt($('#tempCData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 333;
                    data = num.toString(2).padStart(12, '0');
                }
                tempCData = parseInt((tempCData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typepa').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var volAData = arr.join('');
                if ($('#volAData').val() != '') {
                    data = parseInt($('#volAData').val()).toString(2).padStart(11, '0');
                } else {
                    var num = 220;
                    data = num.toString(2).padStart(11, '0');
                }
                volAData = parseInt((volAData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typepb').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var volBData = arr.join('');
                if ($('#volBData').val() != '') {
                    data = parseInt($('#volBData').val()).toString(2).padStart(11, '0');
                } else {
                    var num = 220;
                    data = num.toString(2).padStart(11, '0');
                }
                volBData = parseInt((volBData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.typepc').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var volCData = arr.join('');
                if ($('#volCData').val() != '') {
                    data = parseInt($('#volCData').val()).toString(2).padStart(11, '0');
                } else {
                    var num = 220;
                    data = num.toString(2).padStart(11, '0');
                }
                volCData = parseInt((volCData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.statea').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var curAData = arr[0] + '00' + arr[1];
                if ($('#curAData').val() != '') {
                    data = parseInt($('#curAData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 0;
                    data = num.toString(2).padStart(12, '0');
                }
                curAData = parseInt((curAData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.stateb').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var curBData = arr[0] + '00' + arr[1];
                if ($('#curBData').val() != '') {
                    data = parseInt($('#curBData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 0;
                    data = num.toString(2).padStart(12, '0');
                }
                curBData = parseInt((curBData + data), 2).toString(16).padStart(4, '0');

                arr = [];
                $('.statec').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                var curCData = arr[0] + '00' + arr[1];
                if ($('#curCData').val() != '') {
                    data = parseInt($('#curCData').val()).toString(2).padStart(12, '0');
                } else {
                    var num = 0;
                    data = num.toString(2).padStart(12, '0');
                }
                curCData = parseInt((curCData + data), 2).toString(16).padStart(4, '0');

                states = ['40401901020001', elecData, tempAData, tempBData, tempCData, volAData, volBData, volCData, curAData, curBData, curCData, 'A0096C'];
                console.log(states);
            } else if ($('#category').val() == 'magnetic') {
                let arr = [];
                $('.magtype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('00');
                    }
                });
                var arrFir = arr[0];
                var arrSec = arr.slice(1);

                states = ['02', arrFir, parseInt(arrSec.join("") + "00", 2).toString(16).padStart(2, '0')];
                console.log(states);
            } else if ($('#category').val() == 'wireless') {
                let arr = [];
                $('.wirelesstype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });
                arr.push('0');
                arr.push((parseInt($('select').children("option:selected").val()) / 5).toString(2).padStart(5, '0'));

                var preData = $('#preData').val();
                if (preData >= '0') {
                    preData = parseInt(preData).toString(16).padStart(2, '0');
                } else {
                    preData = calReverseVal(preData);
                }

                console.log(preData);

                var actData = $('#actData').val();
                if (actData > '0') {
                    actData = parseInt(actData).toString(16).padStart(4, '0');
                } else {
                    actData = calReverseVal(actData);
                }

                actData = actData.substring(2, 4) + actData.substring(0, 2);
                console.log(actData);

                var preCnt = $("#preCnt").val();
                if (preCnt != '1') {
                    states = ['aa557402', parseInt(arr.join(''), 2).toString(16).padStart(2, '0'), '1e00', parseInt(preCnt).toString(16).padStart(2, '0'), 'd1', preData, '1e00e803', actData.toString().repeat(parseInt(preCnt)), '3cef'];
                } else {
                    states = ['aa557402', parseInt(arr.join(''), 2).toString(16).padStart(2, '0'), '1e00', parseInt(preCnt).toString(16).padStart(2, '0'), 'd1', preData, '1e00e803', actData, '3cef'];
                }
                console.log(states);
            } else if ($('#category').val() == 'temphum') {
                let arr = [];
                $('.humtype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });

                let status = arr[0] + arr[1] + arr[2] + '00000';
                let batV = (parseInt($('#batV').val().replace('.', '')) - 150).toString(16).padStart(2, '0');
                let tempData = arr[3] + arr[4] + (parseInt($('#tempData').val().replace('.', ''))).toString(2).padStart(14, '0');
                let humData = parseInt($('#humData').val()).toString(16).padStart(2, '0');
                console.log(status, batV, tempData, humData);

                if ($('.humtypedis').hasClass('active')) {
                    states = [parseInt(status, 2).toString(16).padStart(2, '0'), batV, parseInt(tempData, 2).toString(16).padStart(4, '0'), "FF"];
                } else {
                    states = [parseInt(status, 2).toString(16).padStart(2, '0'), batV, parseInt(tempData, 2).toString(16).padStart(4, '0'), humData];
                }

                console.log(states);
            } else if ($('#category').val() == 'waterquality') {
                if ($('#mol').val() == 'mg') {
                    let water = $('#water').val();
                    water = get_float_hex(water);
                    console.log(water);
                    states = ['010304', water, '38C9'];
                } else {
                    if ($('#liquid').val() != '') {
                        let liquid = parseInt($('#liquid').val()).toString(16).padStart(8, '0');
                        states = ['010404', liquid, 'EE66'];
                    } else {
                        let flash = parseInt($('#flash').val()).toString(16).padStart(4, '0');
                        let perhour = parseInt($('#perhour').val()).toString(16).padStart(4, '0');
                        let accu = parseInt($('#accu').val()).toString(16).padStart(4, '0');
                        let total = parseInt($('#total').val()).toString(16).padStart(4, '0');
                        states = ['010104', flash, perhour, accu, total, 'EE66'];
                    }
                    console.log(states);
                }
            } else if ($('#category').val() == 'wireTemp') {
                let arr = [];
                $('.wiretype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString());
                    } else {
                        arr.push('0');
                    }
                });

                let batPre = $('#batPre').val().includes('.') ? $('#batPre').val().replace('.', '') : $('#batPre').val() + '00';
                let bat = (parseInt(batPre) - 150).toString(16).padStart(2, '0');
                let temp = $('#wireTempData').val().includes('.') ? $('#wireTempData').val().replace('.', '') : $('#wireTempData').val() + '0';
                console.log(temp);
                let tempFir = parseInt(temp).toString(2).padStart(14, '0');

                tempFir = arr[3] + arr[4] + tempFir;
                console.log(tempFir)
                tempFir = parseInt(tempFir, 2).toString(16).padStart(4, '0');

                states = [parseInt(arr[0] + arr[1] + arr[2] + '00000', 2).toString(16).padStart(2, '0'), bat, tempFir];
                console.log(states);
            } else if ($('#category').val() == 'wd') {
                let arr = [];
                $('.statez').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString());
                    } else {
                        arr.push('00');
                    }
                });

                let tempAAData = $('#tempAAData').val() != '' ? parseInt($('#tempAAData').val()).toString(16).padStart(4, '0') : '0000';
                console.log(tempAAData);
                let tempBBData = $('#tempBBData').val() != '' ? parseInt($('#tempBBData').val()).toString(16).padStart(4, '0') : '0000';
                let tempCCData = $('#tempCCData').val() != '' ? parseInt($('#tempCCData').val()).toString(16).padStart(4, '0') : '0000';
                let curcurData = $('#curcurData').val() != '' ? parseInt($('#curcurData').val()).toString(16).padStart(4, '0') : '0000';

                states = ['b0b001', arr[0], tempAAData, arr[1], tempBBData, arr[2], tempCCData, curcurData, '034d'];
                console.log(states);
            } else if ($('#category').val() == 'loraL') {
                let batP = 4095 * 1.224 / parseFloat($('#batL').val());
                let roundNum = Math.round(batP);
                let truVal = $('#batL').val() != '' ? parseInt(roundNum + "").toString(16).padStart(4, '0') : '0000';

                let valueL = parseFloat($('#valueL').val()) * 1.6 / 5 + 0.4;
                let valueRound = Math.round(valueL * roundNum / 1.224);
                let truValue = $('#valueL').val() != '' ? parseInt(valueRound + "").toString(16).padStart(4, '0') : '0000';

                states = ['d0d0000c', truValue, truVal, '00005a5a'];
                console.log(states);
            } else if ($('#category').val() == 'loraP') {
                let batL = 4095 * 1.224 / parseFloat($('#batP').val());
                let roundNum = Math.round(batL);
                let truVal = $('#batP').val() != '' ? parseInt(roundNum + "").toString(16).padStart(4, '0') : '0000';

                let valueL = parseFloat($('#valueP').val()) * 1.6 / 2 + 0.4;
                let valueRound = Math.round(valueL * roundNum / 1.224);
                let truValue = $('#valueP').val() != '' ? parseInt(valueRound + "").toString(16).padStart(4, '0') : '0000';

                states = ['d0d0000c', truValue, truVal, '00005a5a'];
                console.log(states);
            } else if ($('#category').val() == 'methane') {
                let arr = [];
                if ($('.metha.active').data('value') + "" != '0') {
                    arr.push($('.metha.active').data('value') + "");
                    arr.push("3200_0_5503");
                }
                if ($('#signal').val() != '') {
                    arr.push($('#signal').val());
                    arr.push("3302_0_5903");
                }
                if ($('#rsrp').val() != '') {
                    arr.push($('#rsrp').val());
                    arr.push("3341_0_5528");
                }
                if ($('#snr').val() != '') {
                    arr.push($('#snr').val());
                    arr.push("3341_0_5545");
                }
                if ($('#signalQ').val() != '') {
                    arr.push($('#signalQ').val());
                    arr.push("3302_0_5501");
                }
                //if ($('#methaneThickness').val() != '') {
                //    arr.push($('#methaneThickness').val());
                //    arr.push("3200_0_5504");
                //}
                if (arr.length != 0) {
                    let pushInArr = [];
                    let currentTIme = new Date().getTime();
                    if (arr.indexOf("3200_0_5503") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5503")], "value": arr[arr.indexOf("3200_0_5503") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3302_0_5903") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3302_0_5903")], "value": arr[arr.indexOf("3302_0_5903") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3302_0_5501") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3302_0_5501")], "value": arr[arr.indexOf("3302_0_5501") - 1], "dev_id": 568972145 });
                    }
                    //if (arr.indexOf("3200_0_5504") != '-1') {
                    //    pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5504")], "value": arr[arr.indexOf("3200_0_5504") - 1], "dev_id": 568972145 });
                    //}
                    if (arr.indexOf("3341_0_5528") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3341_0_5528")], "value": arr[arr.indexOf("3341_0_5528") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3341_0_5545") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3341_0_5545")], "value": arr[arr.indexOf("3341_0_5545") - 1], "dev_id": 568972145 });
                    }

                    var postData = {
                        "msg": pushInArr.length == 1 ? pushInArr[0] : pushInArr,
                        "msg_signature": "QOw61ju0h6tPzYHF13n1OQ==",
                        "nonce": "9nx9II*u",
                    };

                    $.ajax({
                        url: 'http://192.168.2.59:8080/info/forward_data_nb',
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        type: 'POST',
                        timeout: 1000,
                        success: function (res) {
                            $('#myModal').modal('show');
                            setInterval("$('#myModal').modal('hide')", 1500);
                            console.log(res);
                        },
                        error: function (err) {
                            $('#myModal').modal('show');
                            setInterval("$('#myModal').modal('hide')", 1500);
                        }
                    })
                }
                console.log(postData);
                return;
            } else if ($('#category').val() == 'hydrant') {
                let arr = [];
                $('.wirelesstype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });

                let hydBat = $("#hydBat").val();
                let truHydBat = 4096 * 1.224 / parseFloat(hydBat);
                let pre = parseInt(truHydBat); //要转换成为16进制值

                let hydPre = parseFloat($("#hydPre").val());
                if ($("#hydPre").val() > 1.6) {
                    hydPre = 1.6;
                } else if ($("#hydPre").val() <= 0) {
                    hydPre = 0;
                }
                let vol = hydPre * 5 / 1.25 / 1.6 + 0.5;
                let truM2 = vol * pre / 2.448; //要转换成为16进制值
                let deciM2 = parseInt(truM2);

                let temp = parseFloat($("#hydTemp").val());
                let resis = 47.5 / (getTemp(temp) + 9.5) * pre / 1.224;
                let truResis = parseInt(resis);

                console.log("pre:" + pre + " deciM2:" + deciM2 + " truResis:" + truResis + " resis:" + resis);

                states = ['5050090201', parseInt('000' + arr[1] + arr[0] + '00' + arr[2], 2).toString(16).padStart(2, '0'),
                    pre.toString(16).padStart(4, '0'), deciM2.toString(16).padStart(4, '0'), truResis.toString(16).padStart(4, '0'), '8630'];
                console.log(states);
            } else if ($('#category').val() == 'nbdetector') {
                let arr = [];
                if ($('.nbdetec.active').data('value') + "" != '0') {
                    arr.push($('.nbdetec.active').data('value') + "");
                    arr.push("3200_0_5503");
                }
                if ($('#nSignal').val() != '') {
                    arr.push($('#nSignal').val());
                    arr.push("3302_0_5903");
                }
                if ($('#nRsrp').val() != '') {
                    arr.push($('#nRsrp').val());
                    arr.push("3341_0_5528");
                }
                if ($('#nSnr').val() != '') {
                    arr.push($('#nSnr').val());
                    arr.push("3341_0_5545");
                }
                if ($('#nSignalQ').val() != '') {
                    arr.push($('#nSignalQ').val());
                    arr.push("3302_0_5501");
                }
                if ($('#nThickness').val() != '') {
                    arr.push($('#nThickness').val());
                    arr.push("3200_0_5504");
                }
                if ($('#nBattery').val() != '') {
                    arr.push($('#nBattery').val());
                    arr.push("3200_0_5501");
                }
                if ($('#nTemp').val() != '') {
                    arr.push($('#nTemp').val());
                    arr.push("3200_0_5751");
                }
                if (arr.length != 0) {
                    let pushInArr = [];
                    let currentTIme = new Date().getTime();
                    if (arr.indexOf("3200_0_5503") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5503")], "value": arr[arr.indexOf("3200_0_5503") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3302_0_5903") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3302_0_5903")], "value": arr[arr.indexOf("3302_0_5903") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3302_0_5501") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3302_0_5501")], "value": arr[arr.indexOf("3302_0_5501") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3200_0_5504") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5504")], "value": arr[arr.indexOf("3200_0_5504") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3341_0_5528") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3341_0_5528")], "value": arr[arr.indexOf("3341_0_5528") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3341_0_5545") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3341_0_5545")], "value": arr[arr.indexOf("3341_0_5545") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3200_0_5501") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5501")], "value": arr[arr.indexOf("3200_0_5501") - 1], "dev_id": 568972145 });
                    }
                    if (arr.indexOf("3200_0_5751") != '-1') {
                        pushInArr.push({ "at": currentTIme, "imei": mac, "type": 1, "ds_id": arr[arr.indexOf("3200_0_5751")], "value": arr[arr.indexOf("3200_0_5751") - 1], "dev_id": 568972145 });
                    }

                    var postData = {
                        "msg": pushInArr.length == 1 ? pushInArr[0] : pushInArr,
                        "msg_signature": "QOw61ju0h6tPzYHF13n1OQ==",
                        "nonce": "9nx9II*u",
                    };

                    $.ajax({
                        url: 'http://192.168.2.59:8080/info/forward_data_nb',
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        type: 'POST',
                        timeout: 1000,
                        success: function (res) {
                            $('#myModal').modal('show');
                            setInterval("$('#myModal').modal('hide')", 1500);
                            console.log(res);
                        },
                        error: function (err) {
                            $('#myModal').modal('show');
                            setInterval("$('#myModal').modal('hide')", 1500);
                        }
                    })
                }
                console.log(postData);
                return;
            } else if ($('#category').val() == '19ibd01l') {
                let ibd01lBat = $('#ibd01lBat').val();
                let bat = ibd01lBat == '' ? '0000' : parseInt((parseFloat(ibd01lBat) * 1000)).toString(16).padStart(4, '0')

                let arr = []
                $('.19ibd01l').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString())
                    } else {
                        arr.push('00')
                    }
                })

                states = ['A0A0000C', bat, arr[0], arr[1], '00005A5A'];
                console.log(states);
            } else if ($('#category').val() == 'fire') {
                let firePre = $('#firePre').val();
                let firePreVal = firePre == '' ? '0000' : (parseFloat(firePre) * 10 * 1000).toString(16).padStart(4, '0')

                //原始协议
                //let firePre = $('#firePre').val();
                //let firePreVal = firePre == '' ? '0000' : parseInt(firePre).toString(16).padStart(4, '0')

                //let fireBat = $('#fireBat').val();
                //let fireBatVal = fireBat == '' ? '00' : parseInt(fireBat).toString(16).padStart(2, '0')

                let fireBat = $('#fireBat').val();
                let fireBatVal = fireBat == '' ? '00' : Math.round(parseFloat(fireBat) * 255 / 3.6).toString(16).padStart(2, '0')

                let fireTmp = $('#fireTmp').val();
                if (fireTmp == '') {
                    var fireTmpVal = '00'
                } else {
                    if (fireTmp.includes("-")) {
                        var fireTmpVal = calReverseVal(fireTmp)
                    } else {
                        var fireTmpVal = parseInt(fireTmp).toString(16).padStart(2, '0')
                    }
                }

                let arr = []
                $('.fireSta').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString())
                    } else {
                        arr.push('00')
                    }
                })

                states = [firePreVal.substr(2, 2), firePreVal.substr(0, 2), fireTmpVal, fireBatVal, arr[0], '00']
                console.log(states);
            } else if ($('#category').val() == 'waterIn') {
                let arr = []
                $('.waterIn').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString())
                    } else {
                        arr.push('00')
                    }
                })

                console.log(arr[1] + arr[2] + (arr[3] == '01' ? '1' : '0') + (arr[4] == '01' ? '001' : '000'))
                states = ['FA02', arr[0], parseInt(arr[1] + arr[2] + (arr[3] == '01' ? '1' : '0') + (arr[4] == '01' ? '001' : '000'), 2).toString(16).padStart(2, '0'), '3CD0F5']
                console.log(states);
            } else if ($('#category').val() == '18ad01l') {
                let pm1 = $('#pm1').val() == '' ? '0000' : parseInt($('#pm1').val()).toString(16).padStart(4, '0');
                let pm2 = $('#pm2').val() == '' ? '0000' : parseInt($('#pm2').val()).toString(16).padStart(4, '0');
                let pm10 = $('#pm10').val() == '' ? '0000' : parseInt($('#pm10').val()).toString(16).padStart(4, '0');
                if ($('#voc').val() == '') {
                    var vocArr = '00 00 00 00'.split(" ")
                } else {
                    var vocArr = SingleToHex($('#voc').val()).split(" ")
                }
                if ($('#ad01lTmp').val() == '') {
                    var ad01lTmpArr = '00 00 00 00'.split(" ")
                } else {
                    var ad01lTmpArr = SingleToHex($('#ad01lTmp').val()).split(" ")
                }
                if ($('#ad01lHum').val() == '') {
                    var ad01lHumArr = '00 00 00 00'.split(" ")
                } else {
                    var ad01lHumArr = SingleToHex($('#ad01lHum').val()).split(" ")
                }

                states = ['80800018', pm1, pm2, pm10, vocArr[3], vocArr[2], vocArr[1], vocArr[0], ad01lTmpArr[3], ad01lTmpArr[2], ad01lTmpArr[1], ad01lTmpArr[0],
                    ad01lHumArr[3], ad01lHumArr[2], ad01lHumArr[1], ad01lHumArr[0], '5a5a']
                console.log(states);
            } else if ($('#category').val() == 'mqtt') {
                let date = new Date();
                let time = date.getFullYear().toString() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()) + " " + pad2(date.getHours()) + ":" +
                    pad2(date.getMinutes()) + ":" + pad2(date.getSeconds());

                let arr = []
                $('.mqtttype').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value').toString())
                    } else {
                        arr.push('0')
                    }
                })

                let comBined = {};
                if ($('.mqttdata.active').data('value') == '2') {
                    if (arr[0] == '1') comBined["isSupportTriPhase"] = true
                    else comBined["isSupportTriPhase"] = false
                    if (arr[1] == '1') comBined["isLineStatusOnline"] = true
                    else comBined["isLineStatusOnline"] = false
                    if (arr[2] == '1') comBined["isLineStatusTurnOn"] = true
                    else comBined["isLineStatusTurnOn"] = false

                    comBined["ldCurrent"] = 0.0
                    comBined["lineId"] = parseInt($('#mac').val().split("_")[1])
                    comBined["powerA"] = $('#mqttPPA').val() == '' ? 0.0 : parseFloat($('#mqttPPA').val())
                    comBined["powerQuantityTotal"] = $('#mqttPT').val() == '' ? 0.0 : parseFloat($('#mqttPT').val())
                    comBined["rPowerA"] = $('#mqttRPA').val() == '' ? 0.0 : parseFloat($('#mqttRPA').val())
                    comBined["rPowerQuantityTotal"] = $('#mqttRPT').val() == '' ? 0.0 : parseFloat($('#mqttRPT').val())
                    comBined["sCurrentA"] = $('#mqttCA').val() == '' ? 0.0 : parseFloat($('#mqttCA').val())
                    comBined["temp"] = $('#mqttTemp').val() == '' ? 0.0 : parseFloat($('#mqttTemp').val())
                    comBined["voltageA"] = $('#mqttPA').val() == '' ? 0.0 : parseFloat($('#mqttPA').val())

                    if ($('#mqttPB').val() != '') comBined["voltageB"] = parseFloat($('#mqttPB').val())
                    if ($('#mqttPC').val() != '') comBined["voltageC"] = parseFloat($('#mqttPC').val())
                    if ($('#mqttCB').val() != '') comBined["sCurrentB"] = parseFloat($('#mqttCB').val())
                    if ($('#mqttCC').val() != '') comBined["sCurrentC"] = parseFloat($('#mqttCC').val())
                    if ($('#mqttPPB').val() != '') comBined["powerB"] = parseFloat($('#mqttPPB').val())
                    if ($('#mqttPPC').val() != '') comBined["powerC"] = parseFloat($('#mqttPPC').val())
                    if ($('#mqttRPB').val() != '') comBined["rPowerB"] = parseFloat($('#mqttRPB').val())
                    if ($('#mqttRPC').val() != '') comBined["rPowerC"] = parseFloat($('#mqttRPC').val())
                    if ($('#mqttRPT1').val() != '') comBined["rPowerQuantityQuad1"] = parseFloat($('#mqttRPT1').val())
                    if ($('#mqttRPT2').val() != '') comBined["rPowerQuantityQuad2"] = parseFloat($('#mqttRPT2').val())
                    if ($('#mqttRPT3').val() != '') comBined["rPowerQuantityQuad3"] = parseFloat($('#mqttRPT3').val())
                    if ($('#mqttRPT4').val() != '') comBined["rPowerQuantityQuad4"] = parseFloat($('#mqttRPT4').val())
                    if ($('#mqttTempA').val() != '') comBined["temp1"] = parseFloat($('#mqttTempA').val())
                    if ($('#mqttTempB').val() != '') comBined["temp2"] = parseFloat($('#mqttTempB').val())
                    if ($('#mqttTempC').val() != '') comBined["temp3"] = parseFloat($('#mqttTempC').val())
                    if ($('#mqttTempZ').val() != '') comBined["temp4"] = parseFloat($('#mqttTempZ').val())
                    if ($('#mqttPD').val() != '') comBined["powerStatus"] = parseFloat($('#mqttPD').val())

                    var resData = {
                        "createTime": time,
                        "messageData": [comBined],
                        "messageType": "extendHeartData",
                        "moduleId": $('#mac').val().split("_")[0],
                        "moduleName": "武汉L405"
                    };
                } else {
                    resData = {
                        "createTime": time,
                        "messageData": [{
                            "isLineStatusLeakCheck": false, "isLineStatusOnline": true, "isLineStatusTurnOn": true, "isMainRoad": false, "isSupportLeakCheck": true,
                            "isSupportTriPhase": false, "isWarningExist": false, "lineId": 1
                        }, {
                            "isLineStatusLeakCheck": false, "isLineStatusOnline": true, "isLineStatusTurnOn": true, "isMainRoad": false, "isSupportLeakCheck": false,
                            "isSupportTriPhase": false, "isWarningExist": false, "lineId": 2
                        }],
                        "messageType": "baseHeartData",
                        "moduleId": $('#mac').val().split("_")[0],
                        "moduleName": "武汉L405"
                    };
                }

                $.ajax({
                    url: 'http://192.168.2.59:8080/info/forward_data_int',
                    data: JSON.stringify(resData),
                    contentType: "application/json",
                    type: 'POST',
                    timeout: 1000,
                    success: function (res) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                        console.log(res);
                    },
                    error: function (err) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                    }
                })

                console.log(resData)
                return
            } else if ($('#category').val() == 'gt') {
                let date = new Date();
                let time = date.getFullYear().toString().substr(2, 2) + "" + pad2(date.getMonth() + 1) + "" + pad2(date.getDate()) + "" + pad2(date.getHours()) + "" +
                    pad2(date.getMinutes()) + "" + pad2(date.getSeconds());

                let arr = [];
                $('.gtwear').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });

                let result = {
                    "msgBodyer": {
                        "deviceMac": $('#mac').val(),
                        "eventTime": time,
                        "faceAddress": "https://img.zhxf.yingjyun.com/yxun/ai/202003250035/20200422/20200422-155841.png",
                        "faceValidate": 0,
                        "isMask": parseInt(arr[0]),
                        "jobNumber": $('#gtP').val(),
                        "temperature": parseFloat($('#gtT').val()),
                        "userName": $('#gtU').val()
                    }
                }

                console.log(result)
                $.ajax({
                    url: 'http://192.168.2.15:8080/info/forward_data_jt/flume-yixun',
                    data: JSON.stringify(result),
                    contentType: "application/json",
                    type: 'POST',
                    timeout: 1000,
                    success: function (res) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                        console.log(res);
                    },
                    error: function (err) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                    }
                })

                return
            } else if ($('#category').val() == 'sv') {            
                let arr = [];
                $('.svwear').each(function () {
                    if ($(this).hasClass('active')) {
                        arr.push($(this).data('value'));
                    } else {
                        arr.push('0');
                    }
                });

                let result = {
                    "cardNo": "",
                    "checkPic": "https://img.zhxf.yingjyun.com/mips/8CFCA003A9EE/20200429/8CFCA003A9EE_20200429172439.jpg",
                    "checkTime": Date.now(),
                    "extra": "",
                    "idCardNo": $('#svP').val(),
                    "mac": $('#mac').val(),
                    "mask": parseInt(arr[0]),
                    "name": $('#svU').val(),
                    "temperature": parseFloat($('#svT').val()),
                    "type": -1,
                    "userId": "-1"
                }

                console.log(result)
                $.ajax({
                    url: 'http://192.168.2.15:8080/info/forward_data_jt/flume-mips',
                    data: JSON.stringify(result),
                    contentType: "application/json",
                    type: 'POST',
                    timeout: 1000,
                    success: function (res) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                        console.log(res);
                    },
                    error: function (err) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                    }
                })

                return
            } else if ($('#category').val() == 'dh') {
                let time = Date.now() / 1000

                let result = {
                    "eventCardName": $('#dhU').val(),
                    "eventCurrentTemperature": $('#dhT').val(),
                    "eventDeviceMac": $('#mac').val(),
                    "eventDoorTime": parseInt(time).toString(),
                    "eventOssFilePath": "https://img.zhxf.yingjyun.com/dahua/6C07613GAZ13D21/20200429/6C07613GAZ13D21_20200429190307.jpg",
                    "eventUserId": $('#dhP').val()
                }

                console.log(result)
                $.ajax({
                    url: 'http://192.168.2.15:8080/info/forward_data_jt/flume-dahua',
                    data: JSON.stringify(result),
                    contentType: "application/json",
                    type: 'POST',
                    timeout: 1000,
                    success: function (res) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                        console.log(res);
                    },
                    error: function (err) {
                        $('#myModal').modal('show');
                        setInterval("$('#myModal').modal('hide')", 1500);
                    }
                })

                return
            }

            $('.state3.active').each(function () {
                states.push($(this).data('state'))
            });

            var strJoin = states.join('');
            var result = 0;
            for (var i = strJoin.length - 1, j = 0; i > 0; i-- , j++) {
                result += parseInt(strJoin[i]) * (2 ** j);
            }
            var data16 = result.toString(16).length == 1 ? "0" + result.toString(16) : result.toString(16);

            if ($('#category').val() == 'smoke') {
                if ($('.version').hasClass('active')) {
                    data = $('.version.active').data('version') + $('.type.active').data('type') + data16;
                } else {
                    data = parseInt(states.join(""), 2).toString(16);
                }
            } else {
                data = strJoin;
            }
            console.log(data);

            var date = new Date();           
            var month = (date.getMonth() + 1).toString().length == 1 ? "0" + (date.getMonth() + 1).toString() : date.getMonth() + 1;
            var day = date.getDate().toString().length == 1 ? "0" + (date.getDate()) : date.getDate();
            var hour = date.getHours().toString().length == 1 ? "0" + (date.getHours()) : date.getHours();
            var min = date.getMinutes().toString().length == 1 ? "0" + (date.getMinutes()) : date.getMinutes();
            var sec = date.getSeconds().toString().length == 1 ? "0" + (date.getSeconds()) : date.getSeconds();
            var dateFormat = date.getFullYear().toString() + month + day + hour + min + sec;

            var date = new Date();
            var dateFormat1 = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
            var postData = {
                "mac": mac,
                "appeui": "2c26c50124194000",
                "last_update_time": dateFormat1,
                "data": data,
                "reserver": "null",
                "data_type": 2,
                "gateways": [{
                    "fcntdown": "410",
                    "fcntup": "408",
                    "gweui": "70B3D5FFFE88B684",
                    "rssi": "-83",
                    "lsnr": "7.8",
                    "alti": "64",
                    "lng": "114.33754",
                    "lati": "30.35769"
                }, {
                    "fcntdown": "410",
                    "fcntup": "408",
                    "gweui": "70B3D5FFFE88B689",
                    "rssi": "-71",
                    "lsnr": "8.2",
                    "alti": "70",
                    "lng": "114.33693",
                    "lati": "30.35826"
                }, {
                    "fcntdown": "410",
                    "fcntup": "408",
                    "gweui": "70B3D5FFFE88B68A",
                    "rssi": "-88",
                    "lsnr": "4.2",
                    "alti": "83",
                    "lng": "114.33657",
                    "lati": "30.35724"
                }]
            };

            console.log("time" + dateFormat);            

            $.ajax({
                //url: 'http://192.168.2.24:55000/agent',
                url: 'http://192.168.2.59:8080/info/forward_data',
                data: JSON.stringify(postData),
                contentType: "application/json",
                type: 'POST',
                timeout: 1000,
                success: function (res) {
                    $('#myModal').modal('show');
                    setInterval("$('#myModal').modal('hide')", 1500);
                    console.log(res);
                },
                error: function (err) {
                    $('#myModal').modal('show');
                    setInterval("$('#myModal').modal('hide')", 1500);
                }
            })
        } else {
            $('#mainModal').modal('show');
            setInterval("$('#mainModal').modal('hide')", 1500);
        }
    });

    //取消按钮的操作
    $('#cancel').click(function () {
        location.reload();
    });

    //主页的提交按钮的操作
    $('#seapage').click(function () {
        var mac = $('#mac').val();
        $.get('http://localhost:8080/info/device_data?mac=' + mac, function (data) {
            if (data == '') {
                $.get('http://localhost:8080/info/device_data?deviceId=' + mac, function (data1) {
                    if (data1 == '') {
                        $('#mainModal').modal('show');
                        return;
                    } else {
                        data = data1;
                        console.log(data);
                        var modelNumber = data.deviceModelId;
                        var categoryId = data.categoryId;
                        mac = data.mac;
                    }

                    if (categoryId == 1) {
                        window.location.href = "/Home/Index?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 2) {
                        if (modelNumber == 17) window.location.href = "/Home/NBSmokeDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                        else window.location.href = "/Home/SmokeSense?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 3) {
                        window.location.href = "/Home/Gas?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 4) {
                        window.location.href = "/Home/Magnetic?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 5) {
                        if (modelNumber == 16) window.location.href = "/Home/IntellijFireHydrant?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                        else window.location.href = "/Home/WirelessPressure?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 6) {
                        if (modelNumber == 24) window.location.href = "/Home/WSDDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                        else window.location.href = "/Home/TempHumidity?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 7 || categoryId == 8) {
                        window.location.href = "/Home/LoraDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 13) {
                        window.location.href = "/Home/WSDDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 12) {
                        window.location.href = "/Home/FireExtinguisher?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 11) {
                        window.location.href = "/Home/WaterInvade?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    } else if (categoryId == 14) {
                        window.location.href = "/Home/MQTT?value=" + mac + "&categoryId=" + categoryId;
                    } else if (categoryId == 16) {
                        window.location.href = "/Home/JT808?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    }
                });
            } else {
                var modelNumber = data.deviceModelId;
                var categoryId = data.categoryId;
                mac = data.mac;

                if (categoryId == 1) {
                    window.location.href = "/Home/Index?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 2) {
                    if (modelNumber == 17) window.location.href = "/Home/NBSmokeDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    else window.location.href = "/Home/SmokeSense?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 3) {
                    window.location.href = "/Home/Gas?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 4) {
                    window.location.href = "/Home/Magnetic?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 5) {
                    if (modelNumber == 16) window.location.href = "/Home/IntellijFireHydrant?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    else window.location.href = "/Home/WirelessPressure?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 6) {
                    if (modelNumber == 24) window.location.href = "/Home/WSDDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                    else window.location.href = "/Home/TempHumidity?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 7 || categoryId == 8) {
                    window.location.href = "/Home/LoraDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 13) {
                    window.location.href = "/Home/WSDDetector?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 12) {
                    window.location.href = "/Home/FireExtinguisher?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 11) {
                    window.location.href = "/Home/WaterInvade?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                } else if (categoryId == 14) {
                    window.location.href = "/Home/MQTT?value=" + mac + "&categoryId=" + categoryId;
                } else if (categoryId == 16) {
                    window.location.href = "/Home/JT808?value=" + mac + "&categoryId=" + categoryId + "&providerModelNumber=" + modelNumber;
                }
            }         
        })
    });

    $('#search').click(function () {
        var res = $('#textval').val();
        res = changeData(res, $('#category').val());

        if ($('#category').val() == 'gas' || $('#category').val() == 'smoke') {
            var version = $('.version');
            var type = $('.type');
            var state1 = $('.state1');
            var state2 = $('.state2');
            var state3 = $('.state3');

            var subStr = res.substring(0, 2);
            version.removeClass('active');
            $.each(version, function (n, o) {
                var dataVersion = $(o).data('version');
                if (dataVersion == subStr) {
                    $(o).addClass('active');
                }
            })

            subStr = res.substring(2, 4);
            type.removeClass('active');
            $.each(type, function (n, o) {
                var dataVersion = $(o).data('type');
                if (dataVersion == subStr) {
                    $(o).addClass('active');
                }
            })

            subStr = res.substring(4, 6);
            state1.removeClass('active');
            $.each(state1, function (n, o) {
                var dataVersion = $(o).data('state');
                if (dataVersion == subStr) {
                    $(o).addClass('active');
                }
            })

            if ($('#category').val() == 'smoke') {
                subStr = res.substring(6, 8);
                state2.removeClass('active');
                $.each(state2, function (n, o) {
                    var dataVersion = $(o).data('state');
                    if (dataVersion == subStr) {
                        $(o).addClass('active');
                    }
                })
            }

            subStr = res.substring(9, 12);
            state3.removeClass('active');
            $.each(state3, function (n, o) {
                var dataVersion = $(o).data('state');
                if (dataVersion == subStr) {
                    $(o).addClass('active');
                }
            })
        }
    });
});

$('#topNav a').each(function () {
    let url = location.href;
    let current = url.split('/').pop();

    if (current == '') {
        $('#topNav a').first().parent().addClass('active');
    } else if ($(this).attr('href').indexOf(current) != -1) {
        $(this).parent().addClass('active');
    }
})

function changeData(data, category) {
    if (category == 'gas' || category == 'smoke') {
        if (data.length != 6) {
            alert("输入的数据格式错误");
            location.reload();
        } else {
            var subData = data.substring(4, 6);
            return data.substring(0, 4) + parseInt(subData, 16).toString(2).padStart(8, '0');
        }
    } else if (category == 'electronic') {
        var subDataElec = data.substring();
    }
}

function assignValueToText() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('categoryId') == '2') {
        if (urlParams.get('providerModelNumber') == 2) {
            $('.vertype').removeClass('active');
            $('#gs').hide();
            $('#gsAss').hide();
        } else if (urlParams.get('providerModelNumber') == 3) {
            $('.version').removeClass('active');
            $('.type').removeClass('active');
            $('.state1').removeClass('active');
            $('.state2').removeClass('active');
            $('.state3').removeClass('active');
            $('#esa').hide();
            $('#esaAss').hide();
        }
    } else if (urlParams.get('categoryId') == '1') {
        if (urlParams.get('providerModelNumber') == 1) {
            $('#categoryTemp').hide();
            $('#category').val("electronic");
        } else if (urlParams.get('providerModelNumber') == 8) {
            $('#categoryOri').hide();
            $('#category').val("wd");
        }
    } else if (urlParams.get('categoryId') == '3') {
        if (urlParams.get('providerModelNumber') == 4) {
            $('#methane').hide();
            $('#category').val("gas");
        } else if (urlParams.get('providerModelNumber') == 15) {
            $('#gas').hide();
            $('#category').val("methane");
        }
    } else if (urlParams.get('categoryId') == '7') {
        $('#category').val("loraP");
        $('#loraL').hide();
    } else if (urlParams.get('categoryId') == '8') {
        $('#category').val("loraL");
        $('#loraP').hide();
    } else if (urlParams.get('categoryId') == '13') {
        $('#category').val("19ibd01l");
        $('#18ad01l').hide();
    } else if (urlParams.get('categoryId') == '6') {
        if (urlParams.get('providerModelNumber') == '7') {
            $('#category').val("temphum");
        } else {
            $('#category').val("18ad01l");
            $('#19ibd01l').hide();
        }
    } else if (urlParams.get('categoryId') == '16') {
        if (urlParams.get('providerModelNumber') == '31') {
            $('#sv').hide();
            $('#gt').hide();
            $('#category').val("dh");
        } else if (urlParams.get('providerModelNumber') == '33') {
            $('#sv').hide();
            $('#dh').hide();
            $('#category').val("gt");
        } else {
            $('#dh').hide();
            $('#gt').hide();
            $('#category').val("sv");
        }
    }

    $('#mac').val(urlParams.get('value'));
}

function calReverseVal(data) {
    data = Math.abs(parseInt(data).toString());
    if (data <= '127') {
        data = parseInt(data).toString(2).padStart(8, '0');
    } else {
        data = parseInt(data).toString(2).padStart(16, '0');
    }    

    let dataArr = ['1'];
    for (let i = 1; i < data.length; i++) {
        if (data[i] == '0') dataArr.push('1');
        else dataArr.push('0');
    }

    for (let i = dataArr.length - 1; i >= 0; i--) {
        if (dataArr[i] == '1') {
            dataArr[i] = '0';
        } else {
            dataArr[i] = '1';
            break;
        }
    }

    return parseInt(dataArr.join(''), 2).toString(16).padStart(2, '0');
}

$('#clear').click(function () {
    $('#flash').val('');
    $('#perhour').val('');
    $('#accu').val('');
    $('#total').val('');
});

$('#restore').click(function () {
    $('#liquid').val('');
    $('#flash').val('25');
    $('#perhour').val('60');
    $('#accu').val('120');
    $('#total').val('20');
});

$('#open').click(function (e) {
    var exist = false;
    $.ajax({
        url: 'http://192.168.2.59:8888/hook/health',
        contentType: "application/json",
        async: false,
        type: 'GET',
        timeout: 1000,
        success: function (res) {
            exist = true;
        }
    })

    var number = $('#number').val();
    var area = $('#area').val();
    var url = "http://192.168.2.59:8888/hook/send_area_data";
    if (number != '') {
        url = url + "?number=" + number;
        if (area != '') {
            url = url + "&areaCode=" + area;
        }
    } else {
        if (area != '') {
            url = url + "?areaCode=" + area;
        }
    }

    console.log("url: " + url);

    if (exist) {          
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 10000
        })
    } else {
        $.ajax({
            url: "http://192.168.2.59:8080/info/start_up",
            type: 'GET',
            timeout: 10000           
        })

        setTimeout(function () {
            $.ajax({
                url: url,
                type: 'GET',
                timeout: 10000
            })
        }, 8000);

        console.log("send over");
    }
});

$('#close').click(function (e) {
    $.ajax({
        url: 'http://192.168.2.59:8888/hook/shutdown',
        type: 'GET',
        timeout: 5000
    })
});

$(document).keypress(function (e) {
    if (e.which == 13) {
        $("#seapage").click();
    }
});

function pad2(n) { return n < 10 ? '0' + n : n }

function getTemp(x) {
    let T = 0;
    console.log(x);

    if (x == -20) {
        T = 483.8463;
    } else if (x <= -1516.2096 && x > -2017.5141) {
        console.log("enter 2");
        T = (x - 0.125) / -4.17;
    } else if (x <= -1561.3172 && x > -2059.79) {
        console.log("enter 3");
        T = (x - 5.625) / -5.68;
    } else if (x <= -4.991 && x > -10.0379) {
        console.log("enter 3");
        T = (x - 11.48) / -0.078;
    } else if (x <= 0.6791 && x > -4.1366) {
        console.log("enter 4");
        T = (x - 16.98) / -0.10;
    } else if (x <= 4.3 && x > -0.8) {
        console.log("enter 5");
        T = (x - 22.03) / -0.14;
    } else if (x <= 9.4 && x > 4.2) {
        console.log("enter 6");
        T = (x - 28.33) / -0.19;
    } else if (x <= 14.7 && x > 9.7) {
        console.log("enter 7");
        T = (x - 33.57) / -0.24;
    } else if (x <= 19.9 && x > 14.8) {
        console.log("enter 8");
        T = (x - 39.375) / -0.3125;
    } else if (x <= 24.8 && x > 19.6) {
        console.log("enter 9");
        T = (x - 45.83) / -0.42;
    } else if (x <= 29.9 && x > 25) {
        console.log("enter 10");
        T = (x - 50) / -0.5;
    } else if (x <= 34.6 && x > 29.8) {
        console.log("enter 11");
        T = (x - 55) / -0.625;
    } else if (x <= 39.6 && x > 34.6) {
        console.log("enter 12");
        T = (x - 61.67) / -0.83;
    } else if (x <= 63.8 && x > 63.3) {
        console.log("enter 13");
        T = (x - 66) / -0.1;
    } else if (x <= 48.8 && x > 44.0) {
        console.log("enter 14");
        T = (x - 71.25) / -1.25;
    } else if (x <= 53.5 && x > 48.4) {
        console.log("enter 15");
        T = (x - 78.33) / -1.67;
    } else if (x <= 59.1 && x > 52.9) {
        console.log("enter 16");
        T = (x - 90) / -2.5;
    } else if (x <= 64.2 && x > 59.1) {
        console.log("enter 17");
        T = (x - 90) / -2.5;
    } else if (x <= 68.4 && x > 64.2) {
        console.log("enter 18");
        T = (x - 90) / -2.5;
    } else if (x <= 73.5 && x > 66.7) {
        console.log("enter 19");
        T = (x - 110) / -5;
    } else if (x <= 79.1 && x > 73.5) {
        console.log("enter 20");
        T = (x - 110) / -5;
    } else if (x <= 83.8 && x > 79.1) {
        console.log("enter 21");
        T = (x - 110) / -5;
    } else if (x > 85) {
        console.log("enter 22");
        T = 5.242;
    }

    return T;
}

function InsertString(t, c, n) {
    var r = new Array();
    for (var i = 0; i * 2 < t.length; i++) {
        r.push(t.substr(i * 2, n));
    }
    return r.join(c);
}
function FillString(t, c, n, b) {
    if ((t == "") || (c.length != 1) || (n <= t.length)) {
        return t;
    }
    var l = t.length;
    for (var i = 0; i < n - l; i++) {
        if (b == true) {
            t = c + t;
        }
        else {
            t += c;
        }
    }
    return t;
}
function HexToSingle(t) {
    t = t.replace(/\s+/g, "");
    if (t == "") {
        return "";
    }
    if (t == "00000000") {
        return "0";
    }
    if ((t.length > 8) || (isNaN(parseInt(t, 16)))) {
        return "Error";
    }
    if (t.length < 8) {
        t = FillString(t, "0", 8, true);
    }
    t = parseInt(t, 16).toString(2);
    t = FillString(t, "0", 32, true);
    var s = t.substring(0, 1);
    var e = t.substring(1, 9);
    var m = t.substring(9);
    e = parseInt(e, 2) - 127;
    m = "1" + m;
    if (e >= 0) {
        m = m.substr(0, e + 1) + "." + m.substring(e + 1)
    }
    else {
        m = "0." + FillString(m, "0", m.length - e - 1, true)
    }
    if (m.indexOf(".") == -1) {
        m = m + ".0";
    }
    var a = m.split(".");
    var mi = parseInt(a[0], 2);
    var mf = 0;
    for (var i = 0; i < a[1].length; i++) {
        mf += parseFloat(a[1].charAt(i)) * Math.pow(2, -(i + 1));
    }
    m = parseInt(mi) + parseFloat(mf);
    if (s == 1) {
        m = 0 - m;
    }
    return m;
}
function SingleToHex(t) {
    if (t == "") {
        return "";
    }
    t = parseFloat(t);
    if (isNaN(t) == true) {
        return "Error";
    }
    if (t == 0) {
        return "00000000";
    }
    var s,
        e,
        m;
    if (t > 0) {
        s = 0;
    }
    else {
        s = 1;
        t = 0 - t;
    }
    m = t.toString(2);
    if (m >= 1) {
        if (m.indexOf(".") == -1) {
            m = m + ".0";
        }
        e = m.indexOf(".") - 1;
    }
    else {
        e = 1 - m.indexOf("1");
    }
    if (e >= 0) {
        m = m.replace(".", "");
    }
    else {
        m = m.substring(m.indexOf("1"));
    }
    if (m.length > 24) {
        m = m.substr(0, 24);
    }
    else {
        m = FillString(m, "0", 24, false)
    }
    m = m.substring(1);
    e = (e + 127).toString(2);
    e = FillString(e, "0", 8, true);
    var r = parseInt(s + e + m, 2).toString(16);
    r = FillString(r, "0", 8, true);
    return InsertString(r, " ", 2).toUpperCase();
}
function FormatHex(t, n, ie) {
    var r = new Array();
    var s = "";
    var c = 0;
    for (var i = 0; i < t.length; i++) {
        if (t.charAt(i) != " ") {
            s += t.charAt(i);
            c += 1;
            if (c == n) {
                r.push(s);
                s = "";
                c = 0;
            }
        }
        if (ie == false) {
            if ((i == t.length - 1) && (s != "")) {
                r.push(s);
            }
        }
    }
    return r.join("\n");
}
function FormatHexBatch(t, n, ie) {
    var a = t.split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = FormatHex(a[i], n, ie);
    }
    return r.join("\n");
}
function HexToSingleBatch(t) {
    var a = FormatHexBatch(t, 8, true).split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = HexToSingle(a[i]);
    }
    return r.join("\r\n");
}
function SingleToHexBatch(t) {
    var a = t.split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = SingleToHex(a[i]);
    }
    return r.join("\r\n");
}