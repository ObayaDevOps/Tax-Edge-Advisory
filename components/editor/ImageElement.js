import React, { useCallback, useMemo } from 'react'
import { useSelected, useFocused } from 'slate-react'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { withImages } from 'slate-react'

/**
 * ImageElement Component
 * Handles rendering of image elements within the Slate.js editor.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.attributes - The attributes for the Slate element.
 * @param {React.ReactNode} props.children - The children nodes.
 * @param {Object} props.element - The Slate element data.
 *
 * This component ensures that:
 * 1. `children` must be passed.
 * 2. The outermost `div` has the necessary Slate `attributes`.
 * 3. A nested `div` with `contentEditable={false}` wraps the `img` tag to prevent editing.
 * 4. The `img` tag displays the image with appropriate styles.
 * 5. `children` are rendered within the outermost `div` to maintain Slate's node hierarchy.
 */

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()

  return (
    // Outermost div must include the Slate attributes
    <div {...attributes}>
      {/* Nested div with contentEditable set to false to handle void element */}
      <div contentEditable={false}>
        <img
          src={element.url}
          alt={element.alt || 'Image'}
          style={{
            display: 'block',
            maxWidth: '550px',
            maxHeight: '20em',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
            borderRadius: '8px',
          }}
        />
      </div>
      {/* Children must be rendered within the outermost div */}
      {children}
    </div>
  )
}

export default ImageElement

const isVoid = useCallback((element) => {
  return element.type === 'image'
}, [])

const editor = useMemo(() => withImages(withReact(createEditor())), []) 