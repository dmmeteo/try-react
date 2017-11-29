import lessons from '../lessons';

const initialState = {
    category: 'reactjs',
    articles: lessons
};

export default function page(state = initialState) {
    return state
}