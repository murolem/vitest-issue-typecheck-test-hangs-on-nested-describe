import { test, describe } from 'vitest';

describe('few group of tests for something', () => {
    // if commented, everything works as expected
    describe('few tests for something', () => {
        // if uncommented, does nothing
        // test('test something nested', () => {
        //     // @ts-expect-error
        //     let bar: number = 'bye';
        // });
    })

    // if uncommented, everything works as expected
    // test('something else', () => {
    //     // @ts-expect-error
    //     let foo: string = 123;
    // })
});

test('something', () => {
    // @ts-expect-error
    let foo: string = 123;
})

// if uncommented, does nothing,
// even with commenting the test above
// describe('something else', () => {
// })