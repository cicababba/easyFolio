const useConfiguration = () => {

    const isLocal = () => process.env.REACT_APP_DATA_MODE === "local"

    return {
        isLocal
    }
}

export default useConfiguration
