import {setTime} from '../index';

describe(`Clock component`, () => {
    it(`should be return 3 seconds`, () => {
        const time = 3;

        setTime(time);

        expect(setTime(time)).toEqual({
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 3
        });
    })
    it(`should be return 1 min 1 seconds`, () => {
        const time = 61;

        setTime(time);

        expect(setTime(time)).toEqual({
            days : 0,
            hours : 0,
            minutes : 1,
            seconds : 1
        });
    })

    it(`should be return 1h 1 min 15 seconds`, () => {
        const time = 3675;

        setTime(time);

        expect(setTime(time)).toEqual({
            days : 0,
            hours : 1,
            minutes : 1,
            seconds : 15
        });
    })

    it(`should be return  1j 1h 1 min 15 seconds`, () => {
        const time = 90075;

        setTime(time);

        expect(setTime(time)).toEqual({
            days : 1,
            hours : 1,
            minutes : 1,
            seconds : 15
        });
    })
})