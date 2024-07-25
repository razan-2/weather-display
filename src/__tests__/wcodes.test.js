import { getWeatherCodeData } from "../utilities/weather_codes";


describe('tests for getWeatherCodeData function', function() {

  test('testing 0 day for getWeatherCodeData', function() {
    const res = getWeatherCodeData("0", false);

    const exp_res = {"code": "0", "description": "Sunny"}

    expect(res).toMatchObject(exp_res);
  })


  test('testing 0 night for getWeatherCodeData', function() {
    const res = getWeatherCodeData("0", true);

    const exp_res = {"code": "0", "description": "Clear"}

    expect(res).toMatchObject(exp_res);
  })


  test('testing 1 day for getWeatherCodeData', function() {
    const res = getWeatherCodeData("1", false);

    const exp_res = {"code": "1", "description": "Mainly Sunny"}

    expect(res).toMatchObject(exp_res);
  })
  

  test('testing 1 night for getWeatherCodeData', function() {
    const res = getWeatherCodeData("1", true);

    const exp_res = {"code": "1", "description": "Mainly Clear"}

    expect(res).toMatchObject(exp_res);
  })

  // etc

  test('testing 95 day for getWeatherCodeData', function() {
    const res = getWeatherCodeData("95", false);

    const exp_res = {"code": "95", "description": "Thunderstorm"}

    expect(res).toMatchObject(exp_res);
  })
  

  test('testing 95 night for getWeatherCodeData', function() {
    const res = getWeatherCodeData("95", true);

    const exp_res = {"code": "95", "description": "Thunderstorm"}

    expect(res).toMatchObject(exp_res);
  })
  
  test('testing 99 day for getWeatherCodeData', function() {
    const res = getWeatherCodeData("99", false);

    const exp_res = {"code": "99", "description": "Thunderstorm With Hail"}

    expect(res).toMatchObject(exp_res);
  })
  

  test('testing 99 night for getWeatherCodeData', function() {
    const res = getWeatherCodeData("99", true);

    const exp_res = {"code": "99", "description": "Thunderstorm With Hail"}

    expect(res).toMatchObject(exp_res);
  })

})