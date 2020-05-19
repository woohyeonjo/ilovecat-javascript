const str = 'My first testing';

test('FirstTesting', () => {
    expect(str).toBe('My first testing');
});


const arrlike = {
    "length": 3,
    "wow": 3
};

test('ArrayLike Object Test', () => {
    expect(arrlike).toHaveLength(3);
});

test('ArrayLike Object Test 2', () => {
    expect(arrlike).not.toContain("wow");
});


const arr = [1, 2, 3, 4];
    
test('contain test', () => {
    expect(arr).toContain(4);
});