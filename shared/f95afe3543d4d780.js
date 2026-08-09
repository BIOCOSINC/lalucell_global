/* @ds-bundle: {"format":4,"namespace":"Material3DesignKit_019e20","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/actions/ButtonGroup.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"SegmentedButton","sourcePath":"components/actions/SegmentedButton.jsx"},{"name":"Avatar","sourcePath":"components/communication/Avatar.jsx"},{"name":"Badge","sourcePath":"components/communication/Badge.jsx"},{"name":"ProgressIndicator","sourcePath":"components/communication/ProgressIndicator.jsx"},{"name":"Snackbar","sourcePath":"components/communication/Snackbar.jsx"},{"name":"Tooltip","sourcePath":"components/communication/Tooltip.jsx"},{"name":"Card","sourcePath":"components/containment/Card.jsx"},{"name":"Dialog","sourcePath":"components/containment/Dialog.jsx"},{"name":"Divider","sourcePath":"components/containment/Divider.jsx"},{"name":"Sheet","sourcePath":"components/containment/Sheet.jsx"},{"name":"Carousel","sourcePath":"components/media/Carousel.jsx"},{"name":"ListItem","sourcePath":"components/navigation/ListItem.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"NavigationBar","sourcePath":"components/navigation/NavigationBar.jsx"},{"name":"NavigationRail","sourcePath":"components/navigation/NavigationRail.jsx"},{"name":"SearchBar","sourcePath":"components/navigation/SearchBar.jsx"},{"name":"TableOfContents","sourcePath":"components/navigation/TableOfContents.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Toolbar","sourcePath":"components/navigation/Toolbar.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"},{"name":"Checkbox","sourcePath":"components/selection/Checkbox.jsx"},{"name":"RadioButton","sourcePath":"components/selection/RadioButton.jsx"},{"name":"Slider","sourcePath":"components/selection/Slider.jsx"},{"name":"Switch","sourcePath":"components/selection/Switch.jsx"},{"name":"DatePicker","sourcePath":"components/text-inputs/DatePicker.jsx"},{"name":"TextField","sourcePath":"components/text-inputs/TextField.jsx"},{"name":"TimePicker","sourcePath":"components/text-inputs/TimePicker.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5289cc3979da","components/actions/ButtonGroup.jsx":"50938887c4f3","components/actions/Chip.jsx":"5f4d8ba1deff","components/actions/Fab.jsx":"0a1df69ef16b","components/actions/IconButton.jsx":"283ce16cb507","components/actions/SegmentedButton.jsx":"d58e7988a5de","components/communication/Avatar.jsx":"e8deb6befa7f","components/communication/Badge.jsx":"aa9e3a3b0f27","components/communication/ProgressIndicator.jsx":"864059c87c81","components/communication/Snackbar.jsx":"3410c2ada574","components/communication/Tooltip.jsx":"dd21bc531d09","components/containment/Card.jsx":"53333f10f3d9","components/containment/Dialog.jsx":"c5d379d30d07","components/containment/Divider.jsx":"b1e96cb5ebad","components/containment/Sheet.jsx":"e01dcdb0081d","components/media/Carousel.jsx":"567a50679f19","components/navigation/ListItem.jsx":"22694961cd97","components/navigation/Menu.jsx":"4b5d72c416a8","components/navigation/NavigationBar.jsx":"caecb3b7cd45","components/navigation/NavigationRail.jsx":"14350a958339","components/navigation/SearchBar.jsx":"842d75acf465","components/navigation/TableOfContents.jsx":"8fb7477dedbd","components/navigation/Tabs.jsx":"39919d832a28","components/navigation/Toolbar.jsx":"e17cfbc5aa07","components/navigation/TopAppBar.jsx":"4ff1a8a07872","components/selection/Checkbox.jsx":"b832f1f6bf7c","components/selection/RadioButton.jsx":"3ab9fcd0518b","components/selection/Slider.jsx":"0ecaf67f64df","components/selection/Switch.jsx":"eba954cbccf4","components/shared/useStateLayer.js":"905197310a90","components/text-inputs/DatePicker.jsx":"ae36652bc702","components/text-inputs/TextField.jsx":"2624e9b8a151","components/text-inputs/TimePicker.jsx":"698f64f919ce","ui_kits/reply/ReplyApp.jsx":"8790a61aa539"},"inlinedExternals":[],"unexposedExports":[{"name":"useStateLayer","sourcePath":"components/shared/useStateLayer.js"}]} */

(() => {

const __ds_ns = (window.Material3DesignKit_019e20 = window.Material3DesignKit_019e20 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ButtonGroup.jsx
try { (() => {
function ButtonGroup(props = {}) {
  const {
    children,
    connected = true,
    style
  } = props;
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: connected ? 2 : 8,
      ...style
    }
  }, items.map((child, i) => {
    if (!connected) return child;
    const first = i === 0,
      last = i === items.length - 1;
    const radius = `${first ? 'var(--radius-lg)' : 'var(--radius-xs)'} ${last ? 'var(--radius-lg)' : 'var(--radius-xs)'} ${last ? 'var(--radius-lg)' : 'var(--radius-xs)'} ${first ? 'var(--radius-lg)' : 'var(--radius-xs)'}`;
    return React.cloneElement(child, {
      style: {
        ...(child.props.style || {}),
        borderRadius: radius
      }
    });
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/actions/SegmentedButton.jsx
try { (() => {
function SegmentedButton(props = {}) {
  const {
    items = [],
    value,
    onChange,
    multiSelect = false,
    style
  } = props;
  const selected = Array.isArray(value) ? value : [value];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--outline)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      ...style
    }
  }, items.map((it, i) => {
    const active = selected.includes(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 40,
        padding: '0 16px',
        cursor: 'pointer',
        borderLeft: i > 0 ? '1px solid var(--outline)' : 'none',
        background: active ? 'var(--secondary-container)' : 'transparent',
        color: active ? 'var(--on-secondary-container)' : 'var(--on-surface)',
        fontFamily: 'var(--font-plain)',
        fontSize: 14,
        fontWeight: 500
      }
    }, active && '✓', it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/SegmentedButton.jsx", error: String((e && e.message) || e) }); }

// components/communication/Avatar.jsx
try { (() => {
const SIZES = {
  s: 24,
  m: 40,
  l: 56,
  xl: 96
};
const HUES = ['var(--primary-container)', 'var(--secondary-container)', 'var(--tertiary-container)'];
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) | 0;
  return Math.abs(h);
}
function Avatar(props = {}) {
  const {
    initials,
    src,
    size = 'm',
    style
  } = props;
  const d = SIZES[size] || 40;
  const bg = HUES[hash(initials || 'A') % HUES.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-full)',
      background: src ? undefined : bg,
      color: 'var(--on-secondary-container)',
      overflow: 'hidden',
      flexShrink: 0,
      fontFamily: 'var(--font-plain)',
      fontWeight: 500,
      fontSize: d * 0.4,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/communication/Badge.jsx
try { (() => {
function Badge(props = {}) {
  const {
    count,
    style
  } = props;
  const large = count !== undefined && count !== null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: large ? 16 : 6,
      height: large ? 16 : 6,
      padding: large ? '0 4px' : 0,
      borderRadius: 'var(--radius-full)',
      background: 'var(--error)',
      color: 'var(--on-error)',
      fontFamily: 'var(--font-plain)',
      fontSize: 11,
      fontWeight: 500,
      lineHeight: 1,
      boxSizing: 'border-box',
      ...style
    }
  }, large ? count > 999 ? '999+' : count : '');
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Badge.jsx", error: String((e && e.message) || e) }); }

// components/communication/ProgressIndicator.jsx
try { (() => {
function ProgressIndicator(props = {}) {
  const {
    variant = 'linear',
    value,
    style
  } = props;
  const determinate = value !== undefined && value !== null;
  if (variant === 'circular') {
    const size = 40,
      stroke = 4,
      r = (size - stroke) / 2,
      c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        ...(determinate ? {} : {
          animation: 'm3-spin 1.2s linear infinite'
        }),
        ...style
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--secondary-container)",
      strokeWidth: stroke
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--primary)",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: c * (1 - (determinate ? value / 100 : 0.25)),
      transform: `rotate(-90 ${size / 2} ${size / 2})`
    }), /*#__PURE__*/React.createElement("style", null, `@keyframes m3-spin{to{transform:rotate(360deg)}}`));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--secondary-container)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: determinate ? 0 : undefined,
      width: determinate ? `${value}%` : '40%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: 'var(--primary)',
      animation: determinate ? undefined : 'm3-indeterminate 1.4s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes m3-indeterminate{0%{left:-40%}100%{left:100%}}`));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/communication/Snackbar.jsx
try { (() => {
function Snackbar(props = {}) {
  const {
    message,
    actionLabel,
    onAction,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 48,
      maxWidth: 344,
      padding: '14px 8px 14px 16px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--inverse-surface)',
      color: 'var(--inverse-on-surface)',
      boxShadow: 'var(--elevation-3)',
      fontFamily: 'var(--font-plain)',
      fontSize: 14,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--inverse-primary)',
      fontFamily: 'var(--font-plain)',
      fontWeight: 500,
      fontSize: 14,
      cursor: 'pointer',
      padding: '8px 8px'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/communication/Tooltip.jsx
try { (() => {
function Tooltip(props = {}) {
  const {
    text,
    children,
    style
  } = props;
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 4,
      background: 'var(--inverse-surface)',
      color: 'var(--inverse-on-surface)',
      fontFamily: 'var(--font-plain)',
      fontSize: 12,
      lineHeight: '16px',
      padding: '4px 8px',
      borderRadius: 4,
      whiteSpace: 'nowrap',
      zIndex: 10,
      ...style
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/containment/Card.jsx
try { (() => {
const VARIANTS = {
  elevated: {
    bg: 'var(--surface-container-low)',
    shadow: 'var(--elevation-1)',
    border: 'none'
  },
  filled: {
    bg: 'var(--surface-container-highest)',
    shadow: 'none',
    border: 'none'
  },
  outlined: {
    bg: 'var(--surface)',
    shadow: 'none',
    border: '1px solid var(--outline-variant)'
  }
};
function Card(props = {}) {
  const {
    variant = 'elevated',
    onClick,
    children,
    style
  } = props;
  const v = VARIANTS[variant] || VARIANTS.elevated;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: v.bg,
      boxShadow: v.shadow,
      border: v.border,
      borderRadius: 'var(--radius-md)',
      padding: 16,
      boxSizing: 'border-box',
      cursor: onClick ? 'pointer' : 'default',
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Card.jsx", error: String((e && e.message) || e) }); }

// components/containment/Dialog.jsx
try { (() => {
function Dialog(props = {}) {
  const {
    open = true,
    title,
    children,
    actions,
    onClose,
    style
  } = props;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'color-mix(in srgb, var(--scrim) 32%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      minWidth: 280,
      maxWidth: 560,
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--elevation-3)',
      padding: 24,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--on-surface)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--on-surface-variant)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 24
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/containment/Divider.jsx
try { (() => {
function Divider(props = {}) {
  const {
    inset = false,
    vertical = false,
    style
  } = props;
  return vertical ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--outline-variant)',
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      marginLeft: inset ? 16 : 0,
      background: 'var(--outline-variant)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Divider.jsx", error: String((e && e.message) || e) }); }

// components/containment/Sheet.jsx
try { (() => {
function Sheet(props = {}) {
  const {
    open = true,
    variant = 'bottom',
    children,
    onClose,
    style
  } = props;
  if (!open) return null;
  if (variant === 'side') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        background: 'color-mix(in srgb, var(--scrim) 32%, transparent)',
        zIndex: 100
      },
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 320,
        background: 'var(--surface-container-low)',
        boxShadow: 'var(--elevation-1)',
        padding: 24,
        boxSizing: 'border-box',
        fontFamily: 'var(--font-plain)',
        ...style
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'color-mix(in srgb, var(--scrim) 32%, transparent)',
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 640,
      margin: '0 auto',
      background: 'var(--surface-container-low)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      padding: '8px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--outline-variant)',
      margin: '6px auto 16px'
    }
  }), children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/media/Carousel.jsx
try { (() => {
function Carousel(props = {}) {
  const {
    items = [],
    itemWidth = 200,
    gap = 8,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      padding: '4px 0',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      width: itemWidth,
      height: 200,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      scrollSnapAlign: 'start',
      position: 'relative',
      background: 'var(--surface-container-highest)'
    }
  }, it.image && /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: it.label || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), it.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      color: '#fff',
      fontFamily: 'var(--font-plain)',
      fontSize: 14,
      fontWeight: 500,
      textShadow: '0 1px 3px rgba(0,0,0,.5)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListItem.jsx
try { (() => {
function ListItem(props = {}) {
  const {
    leading,
    headline,
    supporting,
    trailing,
    onClick,
    style
  } = props;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      minHeight: supporting ? 72 : 56,
      padding: '8px 16px',
      background: hover && onClick ? 'color-mix(in srgb, var(--on-surface) 8%, transparent)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--on-surface)'
    }
  }, headline), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--on-surface-variant)'
    }
  }, supporting)), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, trailing));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function Menu(props = {}) {
  const {
    open = true,
    items = [],
    style
  } = props;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 200,
      padding: '8px 0',
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--elevation-2)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(MenuRow, {
    key: i,
    item: it
  })));
}
function MenuRow({
  item
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: item.onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 48,
      padding: '0 12px',
      cursor: 'pointer',
      background: hover ? 'color-mix(in srgb, var(--on-surface) 8%, transparent)' : 'transparent',
      fontFamily: 'var(--font-plain)',
      fontSize: 14,
      color: 'var(--on-surface)',
      boxSizing: 'border-box'
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--on-surface-variant)'
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBar.jsx
try { (() => {
function NavigationBar(props = {}) {
  const {
    items = [],
    value,
    onChange,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 80,
      background: 'var(--surface-container)',
      boxShadow: 'var(--elevation-2)',
      ...style
    }
  }, items.map((it, i) => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        cursor: 'pointer',
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 32,
        borderRadius: 'var(--radius-xl)',
        background: active ? 'var(--secondary-container)' : 'transparent',
        color: active ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
        fontSize: 20
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-plain)',
        fontSize: 12,
        fontWeight: 500,
        color: active ? 'var(--on-surface)' : 'var(--on-surface-variant)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationRail.jsx
try { (() => {
function NavigationRail(props = {}) {
  const {
    items = [],
    value,
    onChange,
    fab,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 96,
      height: '100%',
      background: 'var(--surface)',
      paddingTop: 44,
      gap: 12,
      boxSizing: 'border-box',
      ...style
    }
  }, fab && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, fab), items.map((it, i) => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 32,
        borderRadius: 'var(--radius-xl)',
        background: active ? 'var(--secondary-container)' : 'transparent',
        color: active ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
        fontSize: 20
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-plain)',
        fontSize: 12,
        fontWeight: 500,
        color: active ? 'var(--on-surface)' : 'var(--on-surface-variant)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { NavigationRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SearchBar.jsx
try { (() => {
function SearchBar(props = {}) {
  const {
    placeholder = 'Search',
    value,
    onChange,
    leading,
    trailing,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 56,
      padding: '0 16px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-container-high)',
      fontFamily: 'var(--font-plain)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--on-surface)'
    }
  }, leading ?? '🔍'), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontSize: 16,
      color: 'var(--on-surface)'
    }
  }), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--on-surface-variant)'
    }
  }, trailing));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TableOfContents.jsx
try { (() => {
function TableOfContents(props = {}) {
  const {
    items = [],
    value,
    onChange,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, items.map((it, i) => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 40,
        cursor: 'pointer',
        paddingLeft: 12 + (it.level || 0) * 16,
        borderLeft: `2px solid ${active ? 'var(--primary)' : 'transparent'}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: active ? 500 : 400,
        color: active ? 'var(--primary)' : 'var(--on-surface-variant)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TableOfContents });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TableOfContents.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs(props = {}) {
  const {
    items = [],
    value,
    onChange,
    variant = 'primary',
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--outline-variant)',
      ...style
    }
  }, items.map((it, i) => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: 'relative',
        flex: variant === 'primary' ? 1 : undefined,
        padding: '0 16px',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: 'pointer',
        fontFamily: 'var(--font-plain)',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: '0.1px',
        color: active ? 'var(--primary)' : 'var(--on-surface-variant)'
      }
    }, it.icon, /*#__PURE__*/React.createElement("span", null, it.label), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: 'var(--primary)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toolbar.jsx
try { (() => {
function Toolbar(props = {}) {
  const {
    children,
    floating = true,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 64,
      padding: '0 8px',
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-full)',
      boxShadow: floating ? 'var(--elevation-3)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
function TopAppBar(props = {}) {
  const {
    variant = 'small',
    title,
    leading,
    trailing,
    style
  } = props;
  const height = variant === 'large' ? 152 : variant === 'medium' ? 112 : 64;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: variant === 'small' ? 'row' : 'column',
      justifyContent: variant === 'small' ? 'flex-start' : 'flex-end',
      alignItems: variant === 'small' ? 'center' : 'stretch',
      height,
      padding: variant === 'small' ? '0 4px' : '0 16px 16px',
      background: 'var(--surface)',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, variant === 'small' ? /*#__PURE__*/React.createElement(React.Fragment, null, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginRight: 4
    }
  }, leading), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 22,
      lineHeight: '28px',
      color: 'var(--on-surface)'
    }
  }, title), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, trailing)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 12px 0'
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, trailing)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: variant === 'large' ? 36 : 28,
      lineHeight: variant === 'large' ? '44px' : '36px',
      color: 'var(--on-surface)'
    }
  }, title)));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// components/selection/Slider.jsx
try { (() => {
function Slider(props = {}) {
  const {
    value = 50,
    min = 0,
    max = 100,
    disabled = false,
    onChange,
    style
  } = props;
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 16,
      borderRadius: 'var(--radius-full)',
      background: 'var(--secondary-container)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `calc(${pct}% - 4px)`,
      height: 16,
      borderRadius: 'var(--radius-full)',
      background: 'var(--primary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'relative',
      width: '100%',
      margin: 0,
      accentColor: 'var(--primary)',
      height: 40,
      cursor: disabled ? 'default' : 'pointer'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Slider.jsx", error: String((e && e.message) || e) }); }

// components/selection/Switch.jsx
try { (() => {
function Switch(props = {}) {
  const {
    checked = false,
    disabled = false,
    onChange,
    style
  } = props;
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 52,
      height: 32,
      borderRadius: 'var(--radius-full)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : checked ? 'var(--primary)' : 'var(--surface-container-highest)',
      border: checked ? 'none' : `2px solid ${disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : 'var(--outline)'}`,
      boxSizing: 'border-box',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background var(--duration-short) var(--easing-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: checked ? 22 : 4,
      top: checked ? 4 : checked ? 4 : 6,
      width: checked ? 24 : 16,
      height: checked ? 24 : 16,
      borderRadius: 'var(--radius-full)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : checked ? 'var(--on-primary)' : 'var(--outline)',
      transition: 'all var(--duration-short) var(--easing-standard)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      color: 'var(--on-primary-container)'
    }
  }, checked ? '✓' : ''));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Switch.jsx", error: String((e && e.message) || e) }); }

// components/shared/useStateLayer.js
try { (() => {
function useStateLayer(disabled) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const opacity = disabled ? 0 : pressed ? 0.1 : focused ? 0.1 : hovered ? 0.08 : 0;
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };
  return {
    opacity,
    handlers
  };
}
Object.assign(__ds_scope, { useStateLayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/useStateLayer.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {
    height: 32,
    padX: 12,
    gap: 8,
    radius: 'var(--radius-md)',
    font: 'var(--font-plain)',
    weight: 500,
    size: 14,
    line: 20
  },
  s: {
    height: 40,
    padX: 16,
    gap: 8,
    radius: 'var(--radius-md)',
    font: 'var(--font-plain)',
    weight: 500,
    size: 14,
    line: 20
  },
  m: {
    height: 56,
    padX: 24,
    gap: 12,
    radius: 'var(--radius-lg)',
    font: 'var(--font-plain)',
    weight: 500,
    size: 16,
    line: 24
  },
  l: {
    height: 96,
    padX: 48,
    gap: 16,
    radius: 'var(--radius-xl)',
    font: 'var(--font-brand)',
    weight: 400,
    size: 24,
    line: 32
  },
  xl: {
    height: 136,
    padX: 64,
    gap: 20,
    radius: 'var(--radius-xl-inc)',
    font: 'var(--font-brand)',
    weight: 400,
    size: 32,
    line: 40
  }
};
const VARIANTS = {
  elevated: {
    bg: 'var(--surface-container-low)',
    fg: 'var(--primary)',
    shadow: 'var(--elevation-1)',
    border: 'none'
  },
  filled: {
    bg: 'var(--primary)',
    fg: 'var(--on-primary)',
    shadow: 'none',
    border: 'none'
  },
  tonal: {
    bg: 'var(--secondary-container)',
    fg: 'var(--on-secondary-container)',
    shadow: 'none',
    border: 'none'
  },
  outlined: {
    bg: 'transparent',
    fg: 'var(--primary)',
    shadow: 'none',
    border: '1px solid var(--outline-variant)'
  },
  text: {
    bg: 'transparent',
    fg: 'var(--primary)',
    shadow: 'none',
    border: 'none'
  }
};
function Button(props = {}) {
  const {
    variant = 'filled',
    size = 'm',
    icon,
    disabled = false,
    onClick,
    children,
    style
  } = props;
  const s = SIZES[size] || SIZES.m;
  const v = VARIANTS[variant] || VARIANTS.filled;
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, handlers, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      borderRadius: s.radius,
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : v.bg,
      color: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : v.fg,
      border: v.border,
      boxShadow: v.shadow,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: s.font,
      fontWeight: s.weight,
      fontSize: s.size,
      lineHeight: `${s.line}px`,
      letterSpacing: '0.1px',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      transition: 'box-shadow var(--duration-short) var(--easing-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: s.radius,
      background: v.fg,
      opacity,
      pointerEvents: 'none'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      position: 'relative',
      zIndex: 1
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLES = {
  assist: {
    bg: 'var(--surface-container-low)',
    border: '1px solid var(--outline-variant)'
  },
  filter: sel => ({
    bg: sel ? 'var(--secondary-container)' : 'transparent',
    border: sel ? 'none' : '1px solid var(--outline-variant)'
  }),
  input: {
    bg: 'transparent',
    border: '1px solid var(--outline-variant)'
  },
  suggestion: {
    bg: 'transparent',
    border: '1px solid var(--outline-variant)'
  }
};
function Chip(props = {}) {
  const {
    variant = 'assist',
    selected = false,
    icon,
    onClick,
    onRemove,
    disabled = false,
    children,
    style
  } = props;
  const conf = variant === 'filter' ? STYLES.filter(selected) : STYLES[variant] || STYLES.assist;
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, handlers, {
    style: {
      position: 'relative',
      height: 32,
      padding: '0 16px',
      paddingLeft: icon ? 8 : 16,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : conf.bg,
      color: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : selected ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
      border: conf.border,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-plain)',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0.1px',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--on-surface-variant)',
      opacity,
      pointerEvents: 'none'
    }
  }), (selected || icon) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      fontSize: 18
    }
  }, selected ? '✓' : icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children), onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      fontSize: 16,
      marginLeft: 4
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  s: {
    h: 40,
    r: 'var(--radius-md)',
    icon: 24
  },
  m: {
    h: 56,
    r: 'var(--radius-lg)',
    icon: 24
  },
  l: {
    h: 96,
    r: 'var(--radius-xl)',
    icon: 36
  }
};
const COLORS = {
  primary: {
    bg: 'var(--primary-container)',
    fg: 'var(--on-primary-container)'
  },
  secondary: {
    bg: 'var(--secondary-container)',
    fg: 'var(--on-secondary-container)'
  },
  tertiary: {
    bg: 'var(--tertiary-container)',
    fg: 'var(--on-tertiary-container)'
  },
  surface: {
    bg: 'var(--surface-container-high)',
    fg: 'var(--primary)'
  }
};
function Fab(props = {}) {
  const {
    size = 'm',
    color = 'primary',
    extended = false,
    label,
    onClick,
    children,
    style
  } = props;
  const s = SIZES[size] || SIZES.m;
  const c = COLORS[color] || COLORS.primary;
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick
  }, handlers, {
    style: {
      position: 'relative',
      height: s.h,
      minWidth: s.h,
      padding: extended ? `0 ${s.h === 96 ? 40 : 20}px` : 0,
      borderRadius: s.r,
      background: c.bg,
      color: c.fg,
      border: 'none',
      boxShadow: 'var(--elevation-3)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      cursor: 'pointer',
      fontFamily: 'var(--font-plain)',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0.1px',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: s.r,
      background: c.fg,
      opacity,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      fontSize: s.icon
    }
  }, children), extended && label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, label));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 32,
  s: 40,
  m: 56,
  l: 96,
  xl: 136
};
const ICON = {
  xs: 20,
  s: 24,
  m: 24,
  l: 32,
  xl: 40
};
const VARIANTS = {
  standard: sel => ({
    bg: 'transparent',
    fg: sel ? 'var(--primary)' : 'var(--on-surface-variant)',
    border: 'none'
  }),
  filled: sel => ({
    bg: sel ? 'var(--primary)' : 'var(--surface-container-highest)',
    fg: sel ? 'var(--on-primary)' : 'var(--primary)',
    border: 'none'
  }),
  tonal: sel => ({
    bg: sel ? 'var(--secondary-container)' : 'var(--surface-container-highest)',
    fg: sel ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
    border: 'none'
  }),
  outlined: sel => ({
    bg: sel ? 'var(--inverse-surface)' : 'transparent',
    fg: sel ? 'var(--inverse-on-surface)' : 'var(--on-surface-variant)',
    border: sel ? 'none' : '1px solid var(--outline-variant)'
  })
};
function IconButton(props = {}) {
  const {
    variant = 'standard',
    size = 'm',
    selected = false,
    disabled = false,
    onClick,
    children,
    style
  } = props;
  const h = SIZES[size] || SIZES.m;
  const iconSize = ICON[size] || 24;
  const v = (VARIANTS[variant] || VARIANTS.standard)(selected);
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, handlers, {
    style: {
      position: 'relative',
      width: h,
      height: h,
      borderRadius: 'var(--radius-full)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : v.bg,
      color: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : v.fg,
      border: v.border,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      fontSize: iconSize,
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-full)',
      background: v.fg,
      opacity,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      fontSize: iconSize
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/selection/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox(props = {}) {
  const {
    checked = false,
    indeterminate = false,
    disabled = false,
    onChange,
    style
  } = props;
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(disabled);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      ...style
    },
    onClick: disabled ? undefined : () => onChange && onChange(!checked)
  }, handlers), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--primary)' : 'var(--on-surface)',
      opacity,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      borderRadius: 2,
      border: on ? 'none' : '2px solid var(--on-surface-variant)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : on ? 'var(--primary)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-primary)',
      fontSize: 14,
      lineHeight: 1
    }
  }, indeterminate ? '–' : checked ? '✓' : ''));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioButton(props = {}) {
  const {
    selected = false,
    disabled = false,
    onChange,
    style
  } = props;
  const {
    opacity,
    handlers
  } = __ds_scope.useStateLayer(disabled);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      ...style
    },
    onClick: disabled ? undefined : () => onChange && onChange(true)
  }, handlers), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      background: selected ? 'var(--primary)' : 'var(--on-surface)',
      opacity,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      border: `2px solid ${disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : selected ? 'var(--primary)' : 'var(--on-surface-variant)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-full)',
      background: disabled ? 'color-mix(in srgb, var(--on-surface) 38%, transparent)' : 'var(--primary)'
    }
  })));
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/text-inputs/DatePicker.jsx
try { (() => {
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
function DatePicker(props = {}) {
  const {
    year = 2026,
    month = 6,
    selectedDay = 15,
    onSelect,
    style
  } = props;
  const first = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({
    length: daysInMonth
  }, (_, i) => i + 1)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 328,
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-xl)',
      padding: 16,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--on-surface-variant)',
      marginBottom: 8
    }
  }, new Date(year, month).toLocaleString(undefined, {
    month: 'long',
    year: 'numeric'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 4
    }
  }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--on-surface-variant)',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, d)), cells.map((day, i) => {
    const active = day === selectedDay;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => day && onSelect && onSelect(day),
      style: {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-full)',
        cursor: day ? 'pointer' : 'default',
        fontSize: 14,
        background: active ? 'var(--primary)' : 'transparent',
        color: active ? 'var(--on-primary)' : day ? 'var(--on-surface)' : 'transparent'
      }
    }, day || '');
  })));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-inputs/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/text-inputs/TextField.jsx
try { (() => {
function TextField(props = {}) {
  const {
    variant = 'outlined',
    label,
    value,
    onChange,
    placeholder,
    error = false,
    disabled = false,
    supportingText,
    style
  } = props;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--outline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: 240,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 56,
      borderRadius: variant === 'outlined' ? 'var(--radius-xs)' : '4px 4px 0 0',
      background: variant === 'filled' ? 'var(--surface-container-highest)' : 'transparent',
      border: variant === 'outlined' ? `${focused ? 2 : 1}px solid ${disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : borderColor}` : 'none',
      borderBottom: variant === 'filled' ? `${focused ? 2 : 1}px solid ${disabled ? 'color-mix(in srgb, var(--on-surface) 12%, transparent)' : borderColor}` : undefined,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: 12,
      background: variant === 'outlined' ? 'var(--surface)' : 'transparent',
      padding: '0 4px',
      fontSize: 12,
      color: error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--on-surface-variant)',
      fontFamily: 'var(--font-plain)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: e => onChange && onChange(e.target.value),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-plain)',
      fontSize: 16,
      color: 'var(--on-surface)'
    }
  })), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--on-surface-variant)',
      paddingLeft: 16
    }
  }, supportingText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-inputs/TextField.jsx", error: String((e && e.message) || e) }); }

// components/text-inputs/TimePicker.jsx
try { (() => {
function TimePicker(props = {}) {
  const {
    hour = 9,
    minute = 30,
    onChange,
    style
  } = props;
  const angle = hour % 12 / 12 * 360;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-plain)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 80,
      background: 'var(--primary-container)',
      color: 'var(--on-primary-container)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 45,
      fontFamily: 'var(--font-brand)'
    }
  }, String(hour).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 45
    }
  }, ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 80,
      background: 'var(--surface-container-highest)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 45,
      fontFamily: 'var(--font-brand)'
    }
  }, String(minute).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 256,
      height: 256,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-container-highest)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 2,
      height: 96,
      background: 'var(--primary)',
      transformOrigin: 'top',
      transform: `translateX(-1px) rotate(${angle}deg)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 8,
      height: 8,
      marginLeft: -4,
      marginTop: -4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--primary)'
    }
  })));
}
Object.assign(__ds_scope, { TimePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-inputs/TimePicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reply/ReplyApp.jsx
try { (() => {
const {
  TopAppBar,
  SearchBar,
  Tabs,
  ListItem,
  Avatar,
  NavigationRail,
  Fab,
  IconButton,
  TextField,
  Chip,
  Divider,
  Badge
} = window.Material3DesignKit_019e20;
const PEOPLE = [{
  id: 1,
  name: 'Priya Patel',
  initials: 'PP',
  snippet: 'Let’s sync before the review',
  time: '9:41 AM',
  unread: 2
}, {
  id: 2,
  name: 'Marcus Cole',
  initials: 'MC',
  snippet: 'Sent the updated deck',
  time: 'Yesterday'
}, {
  id: 3,
  name: 'Ravi Bhatt',
  initials: 'RB',
  snippet: 'Sounds good, see you then',
  time: 'Yesterday'
}, {
  id: 4,
  name: 'Jun Sato',
  initials: 'JS',
  snippet: 'Can you review my PR?',
  time: 'Mon'
}, {
  id: 5,
  name: 'Lena Ortiz',
  initials: 'LO',
  snippet: 'Photos from the trip 📎',
  time: 'Mon'
}, {
  id: 6,
  name: 'Design Team',
  initials: 'DT',
  snippet: 'Ada: updated the tokens',
  time: 'Sun'
}];
const THREADS = {
  1: [{
    mine: false,
    text: 'Hey! Are we still on for the design review at 2?'
  }, {
    mine: true,
    text: 'Yep, I’ll bring the latest specs.'
  }, {
    mine: false,
    text: 'Perfect. Let’s sync before the review, 1:45?'
  }],
  2: [{
    mine: false,
    text: 'Sent the updated deck — check slide 12.'
  }],
  3: [{
    mine: false,
    text: 'Sounds good, see you then'
  }]
};
function ReplyApp() {
  const [tab, setTab] = React.useState('inbox');
  const [selected, setSelected] = React.useState(1);
  const [query, setQuery] = React.useState('');
  const [draft, setDraft] = React.useState('');
  const [threads, setThreads] = React.useState(THREADS);
  const filtered = PEOPLE.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  const person = PEOPLE.find(p => p.id === selected);
  const messages = threads[selected] || [{
    mine: false,
    text: 'Say hello 👋'
  }];
  function send() {
    if (!draft.trim()) return;
    setThreads(t => ({
      ...t,
      [selected]: [...(t[selected] || []), {
        mine: true,
        text: draft
      }]
    }));
    setDraft('');
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement(NavigationRail, {
    value: tab,
    onChange: setTab,
    fab: /*#__PURE__*/React.createElement(Fab, {
      color: "primary",
      size: "s"
    }, /*#__PURE__*/React.createElement("span", null, "\u270F\uFE0F")),
    items: [{
      label: 'Mail',
      value: 'inbox',
      icon: '📥'
    }, {
      label: 'Chat',
      value: 'chat',
      icon: '💬'
    }, {
      label: 'Meet',
      value: 'meet',
      icon: '📹'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      borderRight: '1px solid var(--outline-variant)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    variant: "small",
    title: "Reply",
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      variant: "standard"
    }, /*#__PURE__*/React.createElement("span", null, "\u22EE"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    value: query,
    onChange: setQuery,
    placeholder: "Search messages"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "filter",
    selected: true
  }, "All"), /*#__PURE__*/React.createElement(Chip, {
    variant: "filter"
  }, "Unread"), /*#__PURE__*/React.createElement(Chip, {
    variant: "filter"
  }, "Flagged")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, filtered.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.id
  }, /*#__PURE__*/React.createElement(ListItem, {
    onClick: () => setSelected(p.id),
    style: {
      background: selected === p.id ? 'var(--secondary-container)' : 'transparent'
    },
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: p.initials
    }),
    headline: p.name,
    supporting: p.snippet,
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--on-surface-variant)'
      }
    }, p.time), p.unread && /*#__PURE__*/React.createElement(Badge, {
      count: p.unread
    }))
  }), i < filtered.length - 1 && /*#__PURE__*/React.createElement(Divider, {
    inset: true
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-container-lowest)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    variant: "small",
    title: person ? person.name : 'Select a conversation',
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: person ? person.initials : '?',
      size: "s"
    }),
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      variant: "standard"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCDE")), /*#__PURE__*/React.createElement(IconButton, {
      variant: "standard"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF9")))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflowY: 'auto'
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.mine ? 'flex-end' : 'flex-start',
      maxWidth: '60%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.mine ? 'var(--primary)' : 'var(--surface-container-high)',
      color: m.mine ? 'var(--on-primary)' : 'var(--on-surface)',
      padding: '10px 16px',
      borderRadius: m.mine ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
      fontSize: 14,
      lineHeight: '20px'
    }
  }, m.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: 16,
      borderTop: '1px solid var(--outline-variant)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    variant: "filled",
    placeholder: "Write a message",
    value: draft,
    onChange: setDraft,
    style: {
      flex: 1,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "filled",
    onClick: send
  }, /*#__PURE__*/React.createElement("span", null, "\u27A4")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reply/ReplyApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SegmentedButton = __ds_scope.SegmentedButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

__ds_ns.NavigationRail = __ds_scope.NavigationRail;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.TableOfContents = __ds_scope.TableOfContents;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.TimePicker = __ds_scope.TimePicker;

})();
