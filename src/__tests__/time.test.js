import { destructureDate, isNight } from "../utilities/time_data";


describe('tests for destructureDate function', function() {

  test('testing destructureDate on set day date', function() {
    const date1 = new Date('December 17, 1995 10:24:00');
    const res = destructureDate(date1);

    const exp_res = {"day": "17", "hour": "10", "minute": "24", "month": "12", "second": "00", "year": "95"}

    expect(res).toMatchObject(exp_res);
  })


  test('testing destructureDate on set night date', function() {
    const date1 = new Date('December 17, 1995 3:24:00');
    const res = destructureDate(date1);

    const exp_res = {"day": "17", "hour": "03", "minute": "24", "month": "12", "second": "00", "year": "95"}

    expect(res).toMatchObject(exp_res);
  })

})



describe('tests for isNight function', function() {

  test('testing isNight on set day date', function() {
    const date1 = new Date('December 17, 1995 10:24:00');
    const res = isNight(date1);

    expect(res).toBe(false);
  })


  test('testing isNight on set day night', function() {
    const date2 = new Date('December 17, 1995 3:24:00');
    const res = isNight(date2);

    expect(res).toBe(true);
  })


  test('testing isNight on current date', function() {
    const curr_date = new Date();
    const res = isNight(curr_date);
    let exp_res = false;

    if ((curr_date.getHours() > 20) || ( curr_date.getHours() < 6)) {
      exp_res = true;
    }

    expect(res).toBe(exp_res);
  })

})