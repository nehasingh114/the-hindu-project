
const initialState = {
    login: false,
    editProfile: false,
    loginStatus: false,
    ProfileSideBar: false,
    LeftSideBar: false,
    EditProfile: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            return { ...state, login: payload }
        case "LOGINSTATUS":
            return { ...state, loginStatus: payload }
        case "PROFILESIDEBAR":
            return { ...state, ProfileSideBar: payload }
        case "LEFTSIDEBAR":
            return { ...state, LeftSideBar: payload }
        case "EDITPROFILE":
            return { ...state, EditProfile: payload }
        default:
            return state
    }
}

