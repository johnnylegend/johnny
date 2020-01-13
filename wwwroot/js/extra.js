function DecToBinTail(dec, pad) {
    var bin = "";
    var i;
    for (i = 0; i < pad; i++) {
        dec *= 2;
        if (dec >= 1) {
            dec -= 1;
            bin += "1";
        }
        else {
            bin += "0";
        }
    }
    return bin;
}

function DecToBinHead(dec, pad) {
    var bin = "";
    var i;
    for (i = 0; i < pad; i++) {
        bin = (parseInt(dec % 2).toString()) + bin;
        dec /= 2;
    }
    return bin;
}

function get_float_hex(decString) {
    var dec = decString;
    var sign;
    var signString;
    var decValue = parseFloat(Math.abs(decString));
    if (decString.toString().charAt(0) == '-') {
        sign = 1;
        signString = "1";
    }
    else {
        sign = 0;
        signString = "0";
    }
    if (decValue == 0) {
        fraction = 0;
        exponent = 0;
    }
    else {
        var exponent = 127;
        if (decValue >= 2) {
            while (decValue >= 2) {
                exponent++;
                decValue /= 2;
            }
        }
        else if (decValue < 1) {
            while (decValue < 1) {
                exponent--;
                decValue *= 2;
                if (exponent == 0)
                    break;
            }
        }
        if (exponent != 0) decValue -= 1; else decValue /= 2;

    }
    var fractionString = DecToBinTail(decValue, 23);
    var exponentString = DecToBinHead(exponent, 8);
    return ('00000000' + parseInt(signString + exponentString + fractionString, 2).toString(16)).substr(-8);
}

function getTemp(x) {
    let T = 0;

    if (x = -20) {
        T = 483.8463;
    } else if (x <= -1516.2096 && x > -2017.5141) {
        T = (x - 0.125) / -4.17;
    } else if (x <= -1561.3172 && x > -2059.79) {
        T = (x - 5.625) / -5.68;
    } else if (x <= -4.991 && x > -10.0379) {
        T = (x - 11.48) / -0.078;
    } else if (x <= 0.6791 && x > -4.1366) {
        T = (x - 16.98) / -0.10;
    } else if (x <= 4.3 && x > -0.8) {
        T = (x - 22.03) / -0.14;
    } else if (x <= 9.4 && x > 4.2) {
        T = (x - 28.33) / -0.19;
    } else if (x <= 14.7 && x > 9.7) {
        T = (x - 33.57) / -0.24;
    } else if (x <= 19.9 && x > 14.8) {
        T = (x - 39.375) / -0.3125;
    } else if (x <= 24.8 && x > 19.6) {
        T = (x - 45.83) / -0.42;
    } else if (x <= 29.9 && x > 25) {
        T = (x - 50) / -0.5;
    } else if (x <= 34.6 && x > 29.8) {
        T = (x - 55) / -0.625;
    } else if (x <= 39.6 && x > 34.6) {
        T = (x - 61.67) / -0.83;
    } else if (x <= 63.8 && x > 63.3) {
        T = (x - 66) / -0.1;
    } else if (x <= 48.8 && x > 44.0) {
        T = (x - 71.25) / -1.25;
    } else if (x <= 53.5 && x > 48.4) {
        T = (x - 78.33) / -1.67;
    } else if (x <= 59.1 && x > 52.9) {
        T = (x - 90) / -2.5;
    } else if (x <= 64.2 && x > 59.1) {
        T = (x - 90) / -2.5;
    } else if (x <= 68.4 && x > 64.2) {
        T = (x - 90) / -2.5;
    } else if (x <= 73.5 && x > 66.7) {
        T = (x - 110) / -5;
    } else if (x <= 79.1 && x > 73.5) {
        T = (x - 110) / -5;
    } else if (x <= 83.8 && x > 79.1) {
        T = (x - 110) / -5;
    } else if (x > 85) {
        T = 5.242;
    }

    //if (x >= 483.8463) {
    //    T = -20;
    //} else if (x >= 363.6294 && x < 483.8463) {
    //    T = -4.17 * x + 0.125;
    //} else if (x >= 275.8701 && x < 363.6294) {
    //    T = -5.68 * x + 5.625;
    //} else if (x >= 211.1656 && x < 275.8701) {
    //    T = -0.078 * x + 11.48;
    //} else if (x >= 163.0086 && x < 211.1656) {
    //    T = -0.10 * x + 16.98;
    //} else if (x >= 126.8456 && x < 163.0086) {
    //    T = -0.14 * x + 22.03;
    //} else if (x >= 99.4589 && x < 126.8456) {
    //    T = -0.19 * x + 28.33;
    //} else if (x >= 78.5505 && x < 99.4589) {
    //    T = -0.24 * x + 33.57;
    //} else if (x >= 62.4653 && x < 78.5505) {
    //    T = -0.3125 * x + 39.375;
    //} else if (x >= 50 && x < 62.4653) {
    //    T = -0.42 * x + 45.83;
    //} else if (x >= 40.2726 && x < 50) {
    //    T = -0.5 * x + 50;
    //} else if (x >= 32.6312 && x < 40.2726) {
    //    T = -0.625 * x + 55;
    //} else if (x >= 26.5903 && x < 32.6312) {
    //    T = -0.83 * x + 61.67;
    //} else if (x >= 21.7857 && x < 26.5903) {
    //    T = -0.1 * x + 66;
    //} else if (x >= 17.9421 && x < 21.7857) {
    //    T = -1.25 * x + 71.25;
    //} else if (x >= 14.8502 && x < 17.9421) {
    //    T = -1.67 * x + 78.33;
    //} else if (x >= 12.3498 && x < 14.8502) {
    //    T = -2.5 * x + 90;
    //} else if (x >= 10.3174 && x < 12.3498) {
    //    T = -2.5 * x + 90;
    //} else if (x >= 8.6573 && x < 10.3174) {
    //    T = -2.5 * x + 90;
    //} else if (x >= 7.295 && x < 8.6573) {
    //    T = -5 * x + 110;
    //} else if (x >= 6.1719 && x < 7.295) {
    //    T = -5 * x + 110;
    //} else if (x >= 5.242 && x < 6.1719) {
    //    T = -5 * x + 110;
    //} else if (x < 5.242) {
    //    T = 85;
    //}

    return T;
}