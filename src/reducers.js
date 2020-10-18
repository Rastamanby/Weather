const initialState = {
    favorites: [
        {
          name: 'Орша',
          link: "Orsha",
        },
        {
          name: 'Анталия',
          link: "Antalya Province",
        },
    ],
    weather: {
        isLoading: false,
        isLoaded: false,
        isError: false,
        data: {}
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY':
            const { value } = action;
            return {
                ...state,
                city: value,
            }

        case 'ON_SHOW_REQUEST': {
            return {
                ...state,
                weather: {
                    ...state.weather,
                    isLoading: true,
                    isError: false,
                }
            }
        }

        case 'ON_SHOW_SUCCESS': {
            const { data } = action;
            return {
                ...state,
                weather: {
                    ...state.weather,
                    isLoading: false,
                    isLoaded: true,
                    data: data,
                }
            }
        }

        case 'ON_SHOW_FAIL': {
            const { data } = action;
            return {
                ...state,
                weather: {
                    ...state.weather,
                    isLoading: false,
                    isError: true,
                }
            }
        }
    
        default:
            return state;
    }
}