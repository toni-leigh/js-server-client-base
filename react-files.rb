def app_prefix
  "waypoint"
end

def base_path
  # "/home/developer/dev/s1_gac_ui/src/components"
  '/Users/dev/Work/Dev/map-routes/src/components'
end

def render_sass?
  true
end

def render_translations?
  false
end

def react(key, type)
  classified = key.to_s.split('-').collect(&:capitalize).join

  i18n_import = render_translations? ? "import './i18n';\n\n" : ""
  i18n_component_import = render_translations? ? "import I18n from 'i18n-js';\n" : ""
  i18n_scope_import = render_translations? ? "const i18nOptions = { scope: '#{app_prefix}#{classified}' };\n\n" : ""

  sass_import = render_sass? ? "import './#{key}.scss';\n\n" : "";

  if (type == 'class')
    return  "#{i18n_component_import}"\
    "import PropTypes from 'prop-types';\n"\
    "import React from 'react';\n\n"\
    "#{sass_import}"\
    "#{i18n_import}"\
    "#{i18n_scope_import}"\
    "class #{classified} extends React.Component {\n"\
    "  static propTypes = {};\n"\
    "  render() {\n"\
    "    return (\n"\
    "      <div className='#{app_prefix}-#{key}'>\n"\
    "        #{classified}\n"\
    "      </div>\n"\
    "    );\n"\
    "  }\n"\
    "}\n\n"\
    "export default #{classified};"
  end

  if (type == 'hoc')
    return "import { connect } from 'react-redux';\n"\
    "#{i18n_component_import}"\
    "import immutableToJS from 'with-immutable-props-to-js';\n"\
    "import PropTypes from 'prop-types';\n"\
    "import React from 'react';\n\n"\
    "#{sass_import}"\
    "#{i18n_import}"\
    "#{i18n_scope_import}"\
    "export const #{classified} = props => (\n"\
    "  <div className='#{app_prefix}-#{key}'>\n"\
    "    #{classified}\n"\
    "  </div>\n"\
    ");\n\n"\
    "#{classified}.propTypes = {};\n\n"\
    "export default connect((state) => ({  }), {  })(immutableToJS(#{classified}));"
  end

  if (type == 'function')
    return  "#{i18n_component_import}"\
    "import PropTypes from 'prop-types';\n"\
    "import React from 'react';\n\n"\
    "#{sass_import}"\
    "#{i18n_import}"\
    "#{i18n_scope_import}"\
    "const #{classified} = props => (\n"\
    "  <div className='#{app_prefix}-#{key}'>\n"\
    "    #{classified}\n"\
    "  </div>\n"\
    ");\n\n"\
    "#{classified}.propTypes = {};\n\n"\
    "export default #{classified};"
  end

  if (type == 'condensed')
    return  "#{i18n_component_import}"\
    "import PropTypes from 'prop-types';\n"\
    "import React from 'react';\n\n"\
    "#{sass_import}"\
    "#{i18n_import}"\
    "#{i18n_scope_import}"\
    "export default props => <div className='#{app_prefix}-#{key}'>#{classified}</div>;"
  end
end

def i18n(key)
  classified = key.to_s.split('-').collect(&:capitalize).join

  return "/* eslint-disable max-len */\n"\
  "/* eslint-disable quotes */\n\n"\
  "import I18n from 'i18n-js';\n"\
  "import { assign } from 'lodash';\n\n"\
  "I18n.translations = I18n.translations || {};\n\n"\
  "I18n.translations.de = assign({}, I18n.translations.de, {\n"\
  "  #{app_prefix}#{classified}: {  }\n"\
  "});\n\n"\
  "I18n.translations.en = assign({}, I18n.translations.en, {\n"\
  "  #{app_prefix}#{classified}: {  }\n"\
  "});\n\n"\
  "I18n.translations.es = assign({}, I18n.translations.es, {\n"\
  "  #{app_prefix}#{classified}: {  }\n"\
  "});\n\n"\
  "I18n.translations.fr = assign({}, I18n.translations.fr, {\n"\
  "  #{app_prefix}#{classified}: {  }\n"\
  "});\n\n"\
end

def sass(key)
  ".#{app_prefix}-#{key} {\n\n"\
  "}"
end

def spec(key, type)
  classified = key.to_s.split('-').collect(&:capitalize).join
  variablised = classified[0, 1].downcase + classified[1..-1]

  i18n_import = render_translations? ? "import './i18n';\n\n" : "";

  if (type == 'hoc')
    return "import React from 'react';\n"\
    "import { shallow } from 'enzyme';\n"\
    "import #{classified}Connected, { #{classified} } from './#{key}';\n\n"\
    "import { createStore } from 'redux';\n\n "\
    "#{i18n_import}"\
    "const store = createStore(() => {});\n\n "\
    "describe('<#{classified}Connected />', () => {\n"\
    "  let #{variablised}Connected;\n\n"\
    "  beforeAll(() => {\n"\
    "    #{variablised}Connected = shallow(\n"\
    "      <#{classified}Connected store={ store } />\n"\
    "    );\n"\
    "  });\n\n"\
    "  test('render occurs through connection', () => {\n"\
    "    expect(#{variablised}Connected).toMatchSnapshot();\n"\
    "  });\n"\
    "});"

    "describe('<#{classified} />', () => {\n"\
    "  let #{variablised};\n\n"\
    "  beforeAll(() => {\n"\
    "    #{variablised} = shallow(\n"\
    "      <#{classified} />\n"\
    "    );\n"\
    "  });\n\n"\
    "  test('basic dumb component render', () => {\n"\
    "    expect(#{variablised}).toMatchSnapshot();\n"\
    "  });\n"\
    "});"
  end

  return "import React from 'react';\n"\
    "import { shallow } from 'enzyme';\n"\
    "import #{classified} from './#{key}';\n\n"\
    "#{i18n_import}"\
    "describe('<#{classified} />', () => {\n"\
    "  let #{variablised};\n\n"\
    "  beforeAll(() => {\n"\
    "    #{variablised} = shallow(\n"\
    "      <#{classified} />\n"\
    "    );\n"\
    "  });\n\n"\
    "  test('basic render', () => {\n"\
    "    expect(#{variablised}).toMatchSnapshot();\n"\
    "  });\n"\
    "});"
end

def react_path(key)
  "#{base_path}/#{key}/#{key}.js"
end

def i18n_path(key)
  "#{base_path}/#{key}/i18n.js"
end

def sass_path(key)
  "#{base_path}/#{key}/#{key}.scss"
end

def spec_path(key)
  "#{base_path}/#{key}/#{key}.test.js"
end

# component-name: 'condensed', 'function', 'hoc' or 'class'
{
  'icon' => 'function'
}.map do |f, type|
  Dir.mkdir("#{base_path}/#{f}")

  js_file = File.new(react_path(f),'w')
  js_file.puts(react(f, type))
  js_file.close

  if render_translations?
    i18n_file = File.new(i18n_path(f),'w')
    i18n_file.puts(i18n(f))
    i18n_file.close
  end

  if render_sass?
    sass_file = File.new(sass_path(f),'w')
    sass_file.puts(sass(f))
    sass_file.close
  end

  spec_file = File.new(spec_path(f),'w')
  spec_file.puts(spec(f, type))
  spec_file.close
end