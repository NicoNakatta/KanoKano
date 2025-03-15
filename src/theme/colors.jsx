const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    pink: (opacity = 1) => `rgba(255,237,247, ${opacity})`,
    vividPink: (opacity = 1) => `rgba(228, 31, 123, ${opacity})`,
    darkPink: (opacity = 1) => `rgba(228, 0, 124, ${opacity})`,
}
export default colors;