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

// Current and forecast
const oneCall = {
    "lat": 61.21,
    "lon": -149.88,
    "timezone": "America/Anchorage",
    "timezone_offset": -28800,
    "current": {
        "dt": 1596564234,
        "sunrise": 1596548488,
        "sunset": 1596608975,
        "temp": 287.13,
        "feels_like": 285.72,
        "pressure": 1009,
        "humidity": 71,
        "dew_point": 281.96,
        "uvi": 4.28,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 1.64,
        "wind_deg": 4,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "rain": {
            "1h": 0.76
        }
    },
    "hourly": [
        {
            "dt": 1596564000,
            "temp": 287.13,
            "feels_like": 285.72,
            "pressure": 1009,
            "humidity": 71,
            "dew_point": 281.96,
            "clouds": 90,
            "visibility": 10000,
            "wind_speed": 1.64,
            "wind_deg": 4,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.01
        },
        {
            "dt": 1596567600,
            "temp": 288.12,
            "feels_like": 286.69,
            "pressure": 1009,
            "humidity": 68,
            "dew_point": 282.27,
            "clouds": 49,
            "visibility": 10000,
            "wind_speed": 1.78,
            "wind_deg": 355,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596571200,
            "temp": 289.34,
            "feels_like": 287.98,
            "pressure": 1008,
            "humidity": 63,
            "dew_point": 282.3,
            "clouds": 31,
            "visibility": 10000,
            "wind_speed": 1.68,
            "wind_deg": 344,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596574800,
            "temp": 290.47,
            "feels_like": 289.11,
            "pressure": 1008,
            "humidity": 60,
            "dew_point": 282.64,
            "clouds": 17,
            "visibility": 10000,
            "wind_speed": 1.81,
            "wind_deg": 336,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596578400,
            "temp": 291.26,
            "feels_like": 289.84,
            "pressure": 1007,
            "humidity": 57,
            "dew_point": 282.62,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 1.89,
            "wind_deg": 328,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0.02
        },
        {
            "dt": 1596582000,
            "temp": 291.7,
            "feels_like": 290.46,
            "pressure": 1006,
            "humidity": 56,
            "dew_point": 282.86,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 1.69,
            "wind_deg": 327,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0.11
        },
        {
            "dt": 1596585600,
            "temp": 292.08,
            "feels_like": 291.26,
            "pressure": 1006,
            "humidity": 55,
            "dew_point": 283.1,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 1.11,
            "wind_deg": 319,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0.13
        },
        {
            "dt": 1596589200,
            "temp": 292.17,
            "feels_like": 291.32,
            "pressure": 1006,
            "humidity": 54,
            "dew_point": 282.9,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.08,
            "wind_deg": 271,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.19
        },
        {
            "dt": 1596592800,
            "temp": 291.99,
            "feels_like": 291.07,
            "pressure": 1006,
            "humidity": 56,
            "dew_point": 283.19,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 1.33,
            "wind_deg": 230,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.23
        },
        {
            "dt": 1596596400,
            "temp": 291.31,
            "feels_like": 290.29,
            "pressure": 1006,
            "humidity": 60,
            "dew_point": 283.56,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 1.63,
            "wind_deg": 204,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.27
        },
        {
            "dt": 1596600000,
            "temp": 290.73,
            "feels_like": 289.94,
            "pressure": 1006,
            "humidity": 64,
            "dew_point": 283.86,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 1.46,
            "wind_deg": 195,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.47
        },
        {
            "dt": 1596603600,
            "temp": 289.78,
            "feels_like": 289.21,
            "pressure": 1006,
            "humidity": 69,
            "dew_point": 284.2,
            "clouds": 18,
            "visibility": 10000,
            "wind_speed": 1.25,
            "wind_deg": 204,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0.43
        },
        {
            "dt": 1596607200,
            "temp": 288.88,
            "feels_like": 288.05,
            "pressure": 1006,
            "humidity": 70,
            "dew_point": 283.48,
            "clouds": 30,
            "visibility": 10000,
            "wind_speed": 1.35,
            "wind_deg": 208,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0.38
        },
        {
            "dt": 1596610800,
            "temp": 288.17,
            "feels_like": 286.89,
            "pressure": 1006,
            "humidity": 70,
            "dew_point": 282.93,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 1.74,
            "wind_deg": 203,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.17
        },
        {
            "dt": 1596614400,
            "temp": 287.67,
            "feels_like": 286.03,
            "pressure": 1006,
            "humidity": 73,
            "dew_point": 282.94,
            "clouds": 63,
            "visibility": 10000,
            "wind_speed": 2.3,
            "wind_deg": 188,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1596618000,
            "temp": 287.25,
            "feels_like": 284.5,
            "pressure": 1006,
            "humidity": 75,
            "dew_point": 283.05,
            "clouds": 56,
            "visibility": 10000,
            "wind_speed": 3.89,
            "wind_deg": 191,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1596621600,
            "temp": 286.47,
            "feels_like": 283.55,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 283.1,
            "clouds": 51,
            "visibility": 10000,
            "wind_speed": 4.21,
            "wind_deg": 191,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1596625200,
            "temp": 285.82,
            "feels_like": 283.33,
            "pressure": 1006,
            "humidity": 82,
            "dew_point": 282.99,
            "clouds": 48,
            "visibility": 10000,
            "wind_speed": 3.5,
            "wind_deg": 190,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1596628800,
            "temp": 285.62,
            "feels_like": 283.69,
            "pressure": 1006,
            "humidity": 83,
            "dew_point": 282.85,
            "clouds": 44,
            "visibility": 10000,
            "wind_speed": 2.69,
            "wind_deg": 193,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1596632400,
            "temp": 285.32,
            "feels_like": 283.77,
            "pressure": 1006,
            "humidity": 84,
            "dew_point": 282.79,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 2.11,
            "wind_deg": 196,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596636000,
            "temp": 285.07,
            "feels_like": 283.91,
            "pressure": 1006,
            "humidity": 85,
            "dew_point": 282.64,
            "clouds": 16,
            "visibility": 10000,
            "wind_speed": 1.53,
            "wind_deg": 189,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596639600,
            "temp": 285.55,
            "feels_like": 284.82,
            "pressure": 1006,
            "humidity": 83,
            "dew_point": 282.77,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 0.95,
            "wind_deg": 164,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596643200,
            "temp": 286.64,
            "feels_like": 286.36,
            "pressure": 1006,
            "humidity": 77,
            "dew_point": 282.87,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 0.29,
            "wind_deg": 189,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596646800,
            "temp": 287.34,
            "feels_like": 286.7,
            "pressure": 1006,
            "humidity": 74,
            "dew_point": 282.89,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 0.83,
            "wind_deg": 271,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596650400,
            "temp": 288.07,
            "feels_like": 287.73,
            "pressure": 1006,
            "humidity": 71,
            "dew_point": 283.02,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 0.44,
            "wind_deg": 250,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596654000,
            "temp": 288.95,
            "feels_like": 288.43,
            "pressure": 1006,
            "humidity": 68,
            "dew_point": 283.16,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.77,
            "wind_deg": 232,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.02
        },
        {
            "dt": 1596657600,
            "temp": 289.46,
            "feels_like": 288.22,
            "pressure": 1006,
            "humidity": 66,
            "dew_point": 283.24,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.81,
            "wind_deg": 258,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.02
        },
        {
            "dt": 1596661200,
            "temp": 289.64,
            "feels_like": 288.21,
            "pressure": 1006,
            "humidity": 65,
            "dew_point": 283.14,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.07,
            "wind_deg": 262,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.16
        },
        {
            "dt": 1596664800,
            "temp": 290.47,
            "feels_like": 289.79,
            "pressure": 1005,
            "humidity": 62,
            "dew_point": 283.24,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 1.02,
            "wind_deg": 248,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.26
        },
        {
            "dt": 1596668400,
            "temp": 291.04,
            "feels_like": 289.98,
            "pressure": 1005,
            "humidity": 60,
            "dew_point": 283.38,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 1.58,
            "wind_deg": 235,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.34
        },
        {
            "dt": 1596672000,
            "temp": 291.2,
            "feels_like": 289.92,
            "pressure": 1005,
            "humidity": 62,
            "dew_point": 283.85,
            "clouds": 5,
            "visibility": 10000,
            "wind_speed": 2.15,
            "wind_deg": 225,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.41
        },
        {
            "dt": 1596675600,
            "temp": 291.46,
            "feels_like": 290.25,
            "pressure": 1005,
            "humidity": 62,
            "dew_point": 284.22,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 2.15,
            "wind_deg": 204,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.16
            }
        },
        {
            "dt": 1596679200,
            "temp": 291.37,
            "feels_like": 289.79,
            "pressure": 1005,
            "humidity": 65,
            "dew_point": 284.75,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 2.94,
            "wind_deg": 198,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.66,
            "rain": {
                "1h": 0.28
            }
        },
        {
            "dt": 1596682800,
            "temp": 290.99,
            "feels_like": 289.26,
            "pressure": 1004,
            "humidity": 68,
            "dew_point": 285.05,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 3.29,
            "wind_deg": 184,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.61,
            "rain": {
                "1h": 0.36
            }
        },
        {
            "dt": 1596686400,
            "temp": 289.76,
            "feels_like": 287.26,
            "pressure": 1004,
            "humidity": 74,
            "dew_point": 285.13,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 4.43,
            "wind_deg": 203,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.65,
            "rain": {
                "1h": 0.26
            }
        },
        {
            "dt": 1596690000,
            "temp": 288.17,
            "feels_like": 286.46,
            "pressure": 1004,
            "humidity": 85,
            "dew_point": 285.73,
            "clouds": 50,
            "visibility": 10000,
            "wind_speed": 3.55,
            "wind_deg": 213,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.71,
            "rain": {
                "1h": 0.27
            }
        },
        {
            "dt": 1596693600,
            "temp": 287.53,
            "feels_like": 287.09,
            "pressure": 1005,
            "humidity": 89,
            "dew_point": 285.78,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 1.77,
            "wind_deg": 201,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.75,
            "rain": {
                "1h": 0.26
            }
        },
        {
            "dt": 1596697200,
            "temp": 287.22,
            "feels_like": 286.79,
            "pressure": 1005,
            "humidity": 87,
            "dew_point": 285.22,
            "clouds": 94,
            "visibility": 10000,
            "wind_speed": 1.47,
            "wind_deg": 138,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.53,
            "rain": {
                "1h": 0.14
            }
        },
        {
            "dt": 1596700800,
            "temp": 287.13,
            "feels_like": 286.34,
            "pressure": 1005,
            "humidity": 84,
            "dew_point": 284.54,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 1.72,
            "wind_deg": 110,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.53
        },
        {
            "dt": 1596704400,
            "temp": 286.55,
            "feels_like": 285.25,
            "pressure": 1005,
            "humidity": 83,
            "dew_point": 283.79,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 2.15,
            "wind_deg": 105,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.51
        },
        {
            "dt": 1596708000,
            "temp": 286.6,
            "feels_like": 284.94,
            "pressure": 1004,
            "humidity": 80,
            "dew_point": 283.27,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 2.46,
            "wind_deg": 106,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.43
        },
        {
            "dt": 1596711600,
            "temp": 286.3,
            "feels_like": 285.31,
            "pressure": 1004,
            "humidity": 79,
            "dew_point": 282.86,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 1.32,
            "wind_deg": 134,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.39
        },
        {
            "dt": 1596715200,
            "temp": 286.43,
            "feels_like": 285.78,
            "pressure": 1004,
            "humidity": 80,
            "dew_point": 283.14,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 0.96,
            "wind_deg": 166,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.35
        },
        {
            "dt": 1596718800,
            "temp": 286.34,
            "feels_like": 285.94,
            "pressure": 1003,
            "humidity": 81,
            "dew_point": 283.32,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.64,
            "wind_deg": 97,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596722400,
            "temp": 286.07,
            "feels_like": 284.73,
            "pressure": 1003,
            "humidity": 81,
            "dew_point": 282.96,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.88,
            "wind_deg": 71,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596726000,
            "temp": 286.02,
            "feels_like": 284.51,
            "pressure": 1002,
            "humidity": 79,
            "dew_point": 282.63,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.97,
            "wind_deg": 95,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596729600,
            "temp": 286.82,
            "feels_like": 286.18,
            "pressure": 1001,
            "humidity": 77,
            "dew_point": 283.02,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.87,
            "wind_deg": 128,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.02
        },
        {
            "dt": 1596733200,
            "temp": 287.33,
            "feels_like": 286.9,
            "pressure": 1001,
            "humidity": 76,
            "dew_point": 283.28,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.68,
            "wind_deg": 216,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.07
        }
    ],
    "daily": [
        {
            "dt": 1596578400,
            "sunrise": 1596548488,
            "sunset": 1596608975,
            "temp": {
                "day": 288.87,
                "min": 287.13,
                "max": 291.04,
                "night": 287.25,
                "eve": 291.04,
                "morn": 287.13
            },
            "feels_like": {
                "day": 287.43,
                "night": 284.5,
                "eve": 289.95,
                "morn": 285.72
            },
            "pressure": 1009,
            "humidity": 65,
            "dew_point": 282.32,
            "wind_speed": 1.81,
            "wind_deg": 336,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 52,
            "pop": 0.38,
            "uvi": 4.28
        },
        {
            "dt": 1596664800,
            "sunrise": 1596635043,
            "sunset": 1596695209,
            "temp": {
                "day": 289.64,
                "min": 285.55,
                "max": 291.2,
                "night": 286.55,
                "eve": 290.99,
                "morn": 285.55
            },
            "feels_like": {
                "day": 288.21,
                "night": 285.25,
                "eve": 289.26,
                "morn": 284.82
            },
            "pressure": 1006,
            "humidity": 65,
            "dew_point": 283.14,
            "wind_speed": 2.07,
            "wind_deg": 262,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 0,
            "pop": 0.75,
            "rain": 1.73,
            "uvi": 4.22
        },
        {
            "dt": 1596751200,
            "sunrise": 1596721599,
            "sunset": 1596781441,
            "temp": {
                "day": 289.33,
                "min": 285.84,
                "max": 289.47,
                "night": 285.84,
                "eve": 288.91,
                "morn": 286.02
            },
            "feels_like": {
                "day": 286.88,
                "night": 283.79,
                "eve": 286.83,
                "morn": 284.51
            },
            "pressure": 1000,
            "humidity": 59,
            "dew_point": 281.5,
            "wind_speed": 2.89,
            "wind_deg": 121,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.47,
            "rain": 0.3,
            "uvi": 3.97
        },
        {
            "dt": 1596837600,
            "sunrise": 1596808154,
            "sunset": 1596867672,
            "temp": {
                "day": 289.38,
                "min": 285.11,
                "max": 289.44,
                "night": 285.4,
                "eve": 289.26,
                "morn": 285.11
            },
            "feels_like": {
                "day": 287.6,
                "night": 283.08,
                "eve": 286.82,
                "morn": 282.9
            },
            "pressure": 1000,
            "humidity": 59,
            "dew_point": 281.44,
            "wind_speed": 1.95,
            "wind_deg": 196,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 99,
            "pop": 0.49,
            "rain": 1.16,
            "uvi": 3.86
        },
        {
            "dt": 1596924000,
            "sunrise": 1596894710,
            "sunset": 1596953902,
            "temp": {
                "day": 289.09,
                "min": 284.69,
                "max": 290.55,
                "night": 286.1,
                "eve": 290.55,
                "morn": 284.69
            },
            "feels_like": {
                "day": 288.53,
                "night": 284.69,
                "eve": 288.62,
                "morn": 282.81
            },
            "pressure": 1011,
            "humidity": 63,
            "dew_point": 282.17,
            "wind_speed": 0.46,
            "wind_deg": 298,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 52,
            "pop": 0.74,
            "rain": 1.14,
            "uvi": 3.88
        },
        {
            "dt": 1597010400,
            "sunrise": 1596981266,
            "sunset": 1597040131,
            "temp": {
                "day": 286.7,
                "min": 285,
                "max": 286.7,
                "night": 285.11,
                "eve": 285.98,
                "morn": 285.04
            },
            "feels_like": {
                "day": 283.76,
                "night": 284.19,
                "eve": 285.66,
                "morn": 283.19
            },
            "pressure": 1000,
            "humidity": 78,
            "dew_point": 282.97,
            "wind_speed": 4.18,
            "wind_deg": 351,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 11.29,
            "uvi": 3.87
        },
        {
            "dt": 1597096800,
            "sunrise": 1597067821,
            "sunset": 1597126358,
            "temp": {
                "day": 288.07,
                "min": 285.23,
                "max": 290.12,
                "night": 285.56,
                "eve": 290.12,
                "morn": 285.23
            },
            "feels_like": {
                "day": 287.7,
                "night": 285.14,
                "eve": 289.75,
                "morn": 283.73
            },
            "pressure": 1011,
            "humidity": 76,
            "dew_point": 283.98,
            "wind_speed": 0.88,
            "wind_deg": 249,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 80,
            "pop": 0.61,
            "rain": 0.54,
            "uvi": 3.97
        },
        {
            "dt": 1597183200,
            "sunrise": 1597154377,
            "sunset": 1597212585,
            "temp": {
                "day": 288.05,
                "min": 284.52,
                "max": 288.05,
                "night": 285.79,
                "eve": 287.63,
                "morn": 284.52
            },
            "feels_like": {
                "day": 286.58,
                "night": 284.27,
                "eve": 286.86,
                "morn": 283.47
            },
            "pressure": 1013,
            "humidity": 76,
            "dew_point": 284.04,
            "wind_speed": 2.45,
            "wind_deg": 298,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 63,
            "pop": 0.92,
            "rain": 4.38,
            "uvi": 3.87
        }
    ]
}