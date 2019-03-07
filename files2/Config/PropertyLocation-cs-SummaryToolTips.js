NDSummary.OnToolTipsLoaded("File2:Config/PropertyLocation.cs",{1010:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1010\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Config.</span>&#8203;PropertyLocation</div></div></div><div class=\"TTSummary\">A struct that stores where a particular property is defined.</div></div>",1012:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> PropertyLocation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">Source&nbsp;</td><td class=\"PName\">source,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName\">fileName&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">default</span>(Path),</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">lineNumber&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1013:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype1013\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static implicit operator</span> PropertyLocation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">Source&nbsp;</td><td class=\"PName last\">configSource</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Allows non-file based Config.Sources to be cast directly to a PropertyLocation.</div></div>",1015:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> IsFileBased (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">Source&nbsp;</td><td class=\"PName last\">configSource</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the passed Config.Source is file-based.</div></div>",1017:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1017\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> IsDefined { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether the property is defined.&nbsp; Is equivalent to testing Source for Source.NotDefined.</div></div>",1018:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1018\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Config.Source Source { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The Config.Source where this property is defined, or Source.NotDefined if it hasn\'t been set.</div></div>",1019:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Path FileName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">If the property is defined in a config file, the Path of the file.&nbsp; Null otherwise.</div></div>",1020:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1020\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> LineNumber { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">If the property is defined in a config file, the line number where it appears.&nbsp; Zero otherwise.</div></div>",1022:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1022\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Source source</div></div>",1023:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Path fileName</div></div>",1024:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1024\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> lineNumber</div></div>"});