import '@babel/polyfill';
import ResultsSection from '../components/ResultsSection.js';

const div = document.createElement('div');
const data = {};
const onClick = () => {};
const onScroll = () => {};


it("그냥 해봄", () => {
    const resultsSection = new ResultsSection({div, data, onClick, onScroll});

    expect(resultsSection.data).toEqual({});
});