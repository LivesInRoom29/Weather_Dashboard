// Current weather data by zip:
const weatherData1 = {
    "coord": {
        "lon": -149.88,
        "lat": 61.21
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 287.42,
        "feels_like": 285.96,
        "temp_min": 286.48,
        "temp_max": 288.71,
        "pressure": 1009,
        "humidity": 67
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 310
    },
    "rain": {
        "1h": 2.29
    },
    "clouds": {
        "all": 75
    },
    "dt": 1596565703,
    "sys": {
        "type": 1,
        "id": 7756,
        "country": "US",
        "sunrise": 1596548488,
        "sunset": 1596608975
    },
    "timezone": -28800,
    "id": 0,
    "name": "Anchorage",
    "cod": 200
}

// UV index
const uvIndex1 = {
    "lat": 61.2,
    "lon": -149.8,
    "date_iso": "2020-08-04T12:00:00Z",
    "date": 1596542400,
    "value": 4.21
}

const forecastCall1 = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1596574800,
            "main": {
                "temp": 295.42,
                "feels_like": 294.98,
                "temp_min": 295.42,
                "temp_max": 296.01,
                "pressure": 1015,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 71,
                "temp_kf": -0.59
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 63
            },
            "wind": {
                "speed": 3.88,
                "deg": 228
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-04 21:00:00"
        },
        {
            "dt": 1596585600,
            "main": {
                "temp": 295.35,
                "feels_like": 294.25,
                "temp_min": 295.35,
                "temp_max": 295.49,
                "pressure": 1013,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 60,
                "temp_kf": -0.14
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 3.4,
                "deg": 229
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-05 00:00:00"
        },
        {
            "dt": 1596596400,
            "main": {
                "temp": 292.31,
                "feels_like": 291.99,
                "temp_min": 292.14,
                "temp_max": 292.31,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 67,
                "temp_kf": 0.17
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 22
            },
            "wind": {
                "speed": 1.73,
                "deg": 225
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-05 03:00:00"
        },
        {
            "dt": 1596607200,
            "main": {
                "temp": 291.87,
                "feels_like": 291.83,
                "temp_min": 291.85,
                "temp_max": 291.87,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 63,
                "temp_kf": 0.02
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 0.74,
                "deg": 195
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-05 06:00:00"
        },
        {
            "dt": 1596618000,
            "main": {
                "temp": 291.07,
                "feels_like": 291.11,
                "temp_min": 291.07,
                "temp_max": 291.07,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1004,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.79,
                "deg": 206
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-05 09:00:00"
        },
        {
            "dt": 1596628800,
            "main": {
                "temp": 290.48,
                "feels_like": 290.53,
                "temp_min": 290.48,
                "temp_max": 290.48,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1004,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.82,
                "deg": 195
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-05 12:00:00"
        },
        {
            "dt": 1596639600,
            "main": {
                "temp": 292.76,
                "feels_like": 292.68,
                "temp_min": 292.76,
                "temp_max": 292.76,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.38,
                "deg": 205
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-05 15:00:00"
        },
        {
            "dt": 1596650400,
            "main": {
                "temp": 294.49,
                "feels_like": 292.89,
                "temp_min": 294.49,
                "temp_max": 294.49,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.85,
                "deg": 234
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-05 18:00:00"
        },
        {
            "dt": 1596661200,
            "main": {
                "temp": 295.12,
                "feels_like": 293.3,
                "temp_min": 295.12,
                "temp_max": 295.12,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 3.96,
                "deg": 232
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-05 21:00:00"
        },
        {
            "dt": 1596672000,
            "main": {
                "temp": 294.6,
                "feels_like": 292.71,
                "temp_min": 294.6,
                "temp_max": 294.6,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1003,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 3.96,
                "deg": 231
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-06 00:00:00"
        },
        {
            "dt": 1596682800,
            "main": {
                "temp": 291.78,
                "feels_like": 291.72,
                "temp_min": 291.78,
                "temp_max": 291.78,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1003,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.44,
                "deg": 208
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-06 03:00:00"
        },
        {
            "dt": 1596693600,
            "main": {
                "temp": 290.99,
                "feels_like": 291.28,
                "temp_min": 290.99,
                "temp_max": 290.99,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.69,
                "deg": 188
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-06 06:00:00"
        },
        {
            "dt": 1596704400,
            "main": {
                "temp": 290.07,
                "feels_like": 289.79,
                "temp_min": 290.07,
                "temp_max": 290.07,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.22,
                "deg": 232
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-06 09:00:00"
        },
        {
            "dt": 1596715200,
            "main": {
                "temp": 289.26,
                "feels_like": 289.19,
                "temp_min": 289.26,
                "temp_max": 289.26,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.68,
                "deg": 210
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-06 12:00:00"
        },
        {
            "dt": 1596726000,
            "main": {
                "temp": 291.67,
                "feels_like": 291.64,
                "temp_min": 291.67,
                "temp_max": 291.67,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.15,
                "deg": 206
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-06 15:00:00"
        },
        {
            "dt": 1596736800,
            "main": {
                "temp": 293.76,
                "feels_like": 292.14,
                "temp_min": 293.76,
                "temp_max": 293.76,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 3.57,
                "deg": 226
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-06 18:00:00"
        },
        {
            "dt": 1596747600,
            "main": {
                "temp": 294.12,
                "feels_like": 291.81,
                "temp_min": 294.12,
                "temp_max": 294.12,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 4.7,
                "deg": 243
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-06 21:00:00"
        },
        {
            "dt": 1596758400,
            "main": {
                "temp": 293.97,
                "feels_like": 291.74,
                "temp_min": 293.97,
                "temp_max": 293.97,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1002,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 4.41,
                "deg": 244
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 00:00:00"
        },
        {
            "dt": 1596769200,
            "main": {
                "temp": 290.96,
                "feels_like": 290.2,
                "temp_min": 290.96,
                "temp_max": 290.96,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1003,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.57,
                "deg": 262
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 03:00:00"
        },
        {
            "dt": 1596780000,
            "main": {
                "temp": 290.24,
                "feels_like": 290.5,
                "temp_min": 290.24,
                "temp_max": 290.24,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1004,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.88,
                "deg": 241
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 06:00:00"
        },
        {
            "dt": 1596790800,
            "main": {
                "temp": 290.04,
                "feels_like": 290.2,
                "temp_min": 290.04,
                "temp_max": 290.04,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.75,
                "deg": 203
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 09:00:00"
        },
        {
            "dt": 1596801600,
            "main": {
                "temp": 289.21,
                "feels_like": 289.24,
                "temp_min": 289.21,
                "temp_max": 289.21,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.85,
                "deg": 240
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 12:00:00"
        },
        {
            "dt": 1596812400,
            "main": {
                "temp": 292.11,
                "feels_like": 292.68,
                "temp_min": 292.11,
                "temp_max": 292.11,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.48,
                "deg": 204
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 15:00:00"
        },
        {
            "dt": 1596823200,
            "main": {
                "temp": 294.72,
                "feels_like": 293.49,
                "temp_min": 294.72,
                "temp_max": 294.72,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.55,
                "deg": 229
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 18:00:00"
        },
        {
            "dt": 1596834000,
            "main": {
                "temp": 295.45,
                "feels_like": 293.68,
                "temp_min": 295.45,
                "temp_max": 295.45,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 4.53,
                "deg": 227
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 21:00:00"
        },
        {
            "dt": 1596844800,
            "main": {
                "temp": 294.15,
                "feels_like": 292.75,
                "temp_min": 294.15,
                "temp_max": 294.15,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 3.54,
                "deg": 235
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 00:00:00"
        },
        {
            "dt": 1596855600,
            "main": {
                "temp": 291.36,
                "feels_like": 291.24,
                "temp_min": 291.36,
                "temp_max": 291.36,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 1.44,
                "deg": 208
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 03:00:00"
        },
        {
            "dt": 1596866400,
            "main": {
                "temp": 291.46,
                "feels_like": 291.7,
                "temp_min": 291.46,
                "temp_max": 291.46,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 0.67,
                "deg": 159
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 06:00:00"
        },
        {
            "dt": 1596877200,
            "main": {
                "temp": 291.22,
                "feels_like": 291.47,
                "temp_min": 291.22,
                "temp_max": 291.22,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.76,
                "deg": 222
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 09:00:00"
        },
        {
            "dt": 1596888000,
            "main": {
                "temp": 290.13,
                "feels_like": 289.86,
                "temp_min": 290.13,
                "temp_max": 290.13,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.32,
                "deg": 249
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 12:00:00"
        },
        {
            "dt": 1596898800,
            "main": {
                "temp": 292.91,
                "feels_like": 292.82,
                "temp_min": 292.91,
                "temp_max": 292.91,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.24,
                "deg": 233
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 15:00:00"
        },
        {
            "dt": 1596909600,
            "main": {
                "temp": 295.54,
                "feels_like": 293.91,
                "temp_min": 295.54,
                "temp_max": 295.54,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.61,
                "deg": 237
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 18:00:00"
        },
        {
            "dt": 1596920400,
            "main": {
                "temp": 296.28,
                "feels_like": 294.11,
                "temp_min": 296.28,
                "temp_max": 296.28,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 4.17,
                "deg": 241
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 21:00:00"
        },
        {
            "dt": 1596931200,
            "main": {
                "temp": 295.11,
                "feels_like": 292.54,
                "temp_min": 295.11,
                "temp_max": 295.11,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 4.9,
                "deg": 250
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 00:00:00"
        },
        {
            "dt": 1596942000,
            "main": {
                "temp": 291.25,
                "feels_like": 290.27,
                "temp_min": 291.25,
                "temp_max": 291.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.81,
                "deg": 259
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 03:00:00"
        },
        {
            "dt": 1596952800,
            "main": {
                "temp": 290.8,
                "feels_like": 290.49,
                "temp_min": 290.8,
                "temp_max": 290.8,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 1.66,
                "deg": 253
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 06:00:00"
        },
        {
            "dt": 1596963600,
            "main": {
                "temp": 290.18,
                "feels_like": 289.9,
                "temp_min": 290.18,
                "temp_max": 290.18,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.53,
                "deg": 264
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 09:00:00"
        },
        {
            "dt": 1596974400,
            "main": {
                "temp": 289.87,
                "feels_like": 289.61,
                "temp_min": 289.87,
                "temp_max": 289.87,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.28,
                "deg": 252
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 12:00:00"
        },
        {
            "dt": 1596985200,
            "main": {
                "temp": 292.53,
                "feels_like": 292.34,
                "temp_min": 292.53,
                "temp_max": 292.53,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.44,
                "deg": 245
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 15:00:00"
        },
        {
            "dt": 1596996000,
            "main": {
                "temp": 295.37,
                "feels_like": 293.84,
                "temp_min": 295.37,
                "temp_max": 295.37,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.4,
                "deg": 239
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 18:00:00"
        }
    ],
    "city": {
        "name": "Ventura",
        "coord": {
            "lat": 34.2788,
            "lon": -119.1651
        },
        "country": "US",
        "timezone": -25200,
        "sunrise": 1596546610,
        "sunset": 1596596111
    }
}

// Current and forecast
const oneCall = {
    "lat": 61.2,
    "lon": -149.88,
    "timezone": "America/Anchorage",
    "timezone_offset": -28800,
    "daily": [
        {
            "dt": 1596578400,
            "sunrise": 1596548492,
            "sunset": 1596608971,
            "temp": {
                "day": 292.88,
                "min": 287.18,
                "max": 292.88,
                "night": 287.18,
                "eve": 291.46,
                "morn": 292.88
            },
            "feels_like": {
                "day": 290.71,
                "night": 284.96,
                "eve": 290.11,
                "morn": 290.71
            },
            "pressure": 1006,
            "humidity": 45,
            "dew_point": 280.62,
            "wind_speed": 2.25,
            "wind_deg": 337,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 40,
            "pop": 0.37,
            "rain": 0.35,
            "uvi": 4.28
        },
        {
            "dt": 1596664800,
            "sunrise": 1596635047,
            "sunset": 1596695205,
            "temp": {
                "day": 290.16,
                "min": 285.63,
                "max": 291.55,
                "night": 286.57,
                "eve": 291.3,
                "morn": 285.63
            },
            "feels_like": {
                "day": 289.09,
                "night": 285.06,
                "eve": 289.49,
                "morn": 284.95
            },
            "pressure": 1005,
            "humidity": 64,
            "dew_point": 283.35,
            "wind_speed": 1.65,
            "wind_deg": 259,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 0,
            "pop": 0.69,
            "rain": 1.48,
            "uvi": 4.22
        },
        {
            "dt": 1596751200,
            "sunrise": 1596721603,
            "sunset": 1596781437,
            "temp": {
                "day": 288.7,
                "min": 285.54,
                "max": 288.99,
                "night": 285.54,
                "eve": 288.37,
                "morn": 286.33
            },
            "feels_like": {
                "day": 287.19,
                "night": 283.49,
                "eve": 286.87,
                "morn": 284.85
            },
            "pressure": 999,
            "humidity": 64,
            "dew_point": 282.13,
            "wind_speed": 1.76,
            "wind_deg": 124,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.61,
            "rain": 1.15,
            "uvi": 3.97
        },
        {
            "dt": 1596837600,
            "sunrise": 1596808158,
            "sunset": 1596867669,
            "temp": {
                "day": 289.37,
                "min": 284.69,
                "max": 290.11,
                "night": 285.22,
                "eve": 290.11,
                "morn": 284.69
            },
            "feels_like": {
                "day": 288.6,
                "night": 282.4,
                "eve": 287.88,
                "morn": 282.62
            },
            "pressure": 999,
            "humidity": 58,
            "dew_point": 281.11,
            "wind_speed": 0.42,
            "wind_deg": 195,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.39,
            "rain": 1.25,
            "uvi": 3.86
        },
        {
            "dt": 1596924000,
            "sunrise": 1596894714,
            "sunset": 1596953899,
            "temp": {
                "day": 288.37,
                "min": 284.55,
                "max": 288.95,
                "night": 285.87,
                "eve": 288.5,
                "morn": 284.55
            },
            "feels_like": {
                "day": 286.79,
                "night": 284.76,
                "eve": 286.51,
                "morn": 282.94
            },
            "pressure": 1009,
            "humidity": 65,
            "dew_point": 282.04,
            "wind_speed": 1.83,
            "wind_deg": 274,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 66,
            "pop": 0.79,
            "rain": 2.33,
            "uvi": 3.88
        },
        {
            "dt": 1597010400,
            "sunrise": 1596981269,
            "sunset": 1597040127,
            "temp": {
                "day": 288.32,
                "min": 284.84,
                "max": 288.8,
                "night": 285.4,
                "eve": 288.65,
                "morn": 284.84
            },
            "feels_like": {
                "day": 286.97,
                "night": 283.37,
                "eve": 287.87,
                "morn": 283.47
            },
            "pressure": 1013,
            "humidity": 73,
            "dew_point": 283.71,
            "wind_speed": 2.13,
            "wind_deg": 336,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 85,
            "pop": 0.74,
            "rain": 3.3,
            "uvi": 3.87
        },
        {
            "dt": 1597096800,
            "sunrise": 1597067825,
            "sunset": 1597126355,
            "temp": {
                "day": 287.46,
                "min": 284.36,
                "max": 290,
                "night": 286.44,
                "eve": 290,
                "morn": 284.36
            },
            "feels_like": {
                "day": 287.15,
                "night": 285.86,
                "eve": 288.53,
                "morn": 283.27
            },
            "pressure": 1009,
            "humidity": 74,
            "dew_point": 283.05,
            "wind_speed": 0.4,
            "wind_deg": 78,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 96,
            "pop": 0,
            "uvi": 3.97
        },
        {
            "dt": 1597183200,
            "sunrise": 1597154381,
            "sunset": 1597212581,
            "temp": {
                "day": 289.13,
                "min": 283.51,
                "max": 290.36,
                "night": 287.02,
                "eve": 290.36,
                "morn": 283.51
            },
            "feels_like": {
                "day": 287.92,
                "night": 285.85,
                "eve": 289.37,
                "morn": 282.33
            },
            "pressure": 1012,
            "humidity": 59,
            "dew_point": 281.19,
            "wind_speed": 1.05,
            "wind_deg": 253,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0.14,
            "uvi": 3.87
        }
    ]
}