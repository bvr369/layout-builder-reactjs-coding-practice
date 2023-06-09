// // Write your code here
// import ConfigurationContext from '../../context/ConfigurationContext'
// import './index.css'

// const ConfigurationController = () => (
//   <ConfigurationContext.Consumer>
//     {value => {
//       const {
//         showContent,
//         showLeftNavbar,
//         showRightNavbar,
//         onToggleShowContent,
//         onToggleShowLeftNavbar,
//         onToggleShowRightNavbar,
//       } = value
//       return (
//         <div className="config-bg-cont">
//           <h1>Layout</h1>
//           <input type="checkbox" id="content" />
//           <label htmlFor="content">Content</label>
//           <input type="checkbox" id="leftNavbar" />
//           <label htmlFor="leftNavbar">Left Navbar</label>
//         </div>
//       )
//     }}
//   </ConfigurationContext.Consumer>
// )

// export default ConfigurationController

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="label-text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
