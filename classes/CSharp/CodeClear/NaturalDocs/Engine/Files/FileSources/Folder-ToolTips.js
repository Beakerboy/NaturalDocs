NDContentPage.OnToolTipsLoaded({800:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype800\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Config.&#8203;Targets.</span>&#8203;SourceFolder</div></div></div><div class=\"TTSummary\">The configuration of a source folder input target.</div></div>",1160:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Errors.</span>&#8203;ErrorList</div></div></div><div class=\"TTSummary\">A list of Error objects.</div></div>",1296:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1296\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">override public</span> InputType Type { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The type of files this FileSource provides.</div></div>",1356:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> InputType : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">The type of FileSource being represented.</div></div>",1360:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1360\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Files.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A module which handles all the files Natural Docs scans.&nbsp; In addition to source files, this includes image files that can be referenced with &quot;(see image.jpg)&quot; and extras tied to CSS styles.</div></div>",1380:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> AddOrUpdateFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Path&nbsp;</td><td class=\"PName\">name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">FileType&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">DateTime&nbsp;</td><td class=\"PName\">lastModified,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">forceReparse&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a file or updates its last modification time.&nbsp; If the file was not previously known to the class, it will be treated as new, whereas if it was known but has a different modification time it will be treated as changed.&nbsp; Returns whether this call changed anything.&nbsp; It is okay to call this multiple times on the same file.</div></div>",1438:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1438\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">abstract public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Files.</span>&#8203;FileSource</div></div></div><div class=\"TTSummary\">The base class for a file source.</div></div>",3786:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3786\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Path</div></div></div><div class=\"TTSummary\">A struct encapsulating a file path string.&nbsp; This is needed because Natural Docs needs to be able to handle all three path formats at once, not just the local format.&nbsp; Natural Docs on Windows may be reading a configuration file from Natural Docs on Linux and vice versa.</div></div>",4009:"<div class=\"NDToolTip TDelegate LCSharp\"><div id=\"NDPrototype4009\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public delegate bool</span> CancelDelegate ()</div><div class=\"TTSummary\">A delegate that returns a bool of whether to cancel an operation or not.</div></div>"});