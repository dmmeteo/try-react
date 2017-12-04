import lessons from '../lessons';

const initialState = {
    category: 'reactjs',
    articles: lessons
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {...state, category: action.category};

        default:
            return state;
    }
}