NDContentPage.OnToolTipsLoaded({1160:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Errors.</span>&#8203;ErrorList</div></div></div><div class=\"TTSummary\">A list of Error objects.</div></div>",1356:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> InputType : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">The type of FileSource being represented.</div></div>",1357:"<div class=\"NDToolTip TConstant LCSharp\"><div class=\"TTSummary\">The FileSource provides source files, although it can provide image files as well.</div></div>",1358:"<div class=\"NDToolTip TConstant LCSharp\"><div class=\"TTSummary\">The FileSource provides images only.</div></div>",1360:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1360\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Files.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A module which handles all the files Natural Docs scans.&nbsp; In addition to source files, this includes image files that can be referenced with &quot;(see image.jpg)&quot; and extras tied to CSS styles.</div></div>",1380:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> AddOrUpdateFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Path&nbsp;</td><td class=\"PName\">name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">FileType&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">DateTime&nbsp;</td><td class=\"PName\">lastModified,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">forceReparse&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a file or updates its last modification time.&nbsp; If the file was not previously known to the class, it will be treated as new, whereas if it was known but has a different modification time it will be treated as changed.&nbsp; Returns whether this call changed anything.&nbsp; It is okay to call this multiple times on the same file.</div></div>",1445:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1445\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">abstract public void</span> AddAllFiles (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Iterates through every file in the source and calls Files.Manager.AddOrUpdateFile() for each one.</div></div>",1452:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public</span> InputType Type { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The type of files this FileSource provides.</div></div>",1459:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1459\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> AddAllFilesStatus addAllFilesStatus</div></div>",1479:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1479\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Files.</span>&#8203;AddAllFilesStatus</div></div></div><div class=\"TTSummary\">Statistics on the progress of FileSource.AddAllFiles().</div></div>",3786:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3786\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Path</div></div></div><div class=\"TTSummary\">A struct encapsulating a file path string.&nbsp; This is needed because Natural Docs needs to be able to handle all three path formats at once, not just the local format.&nbsp; Natural Docs on Windows may be reading a configuration file from Natural Docs on Linux and vice versa.</div></div>",3962:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3962\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Instance</div></div></div><div class=\"TTSummary\">A class for managing the overall Natural Docs engine.</div></div>",4009:"<div class=\"NDToolTip TDelegate LCSharp\"><div id=\"NDPrototype4009\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public delegate bool</span> CancelDelegate ()</div><div class=\"TTSummary\">A delegate that returns a bool of whether to cancel an operation or not.</div></div>",1285:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1285\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Files.&#8203;FileSources.</span>&#8203;Folder</div></div></div><div class=\"TTSummary\">A file source representing a specific folder on disk.</div></div>",2761:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2761\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Output.&#8203;Styles.</span>&#8203;FileSource</div></div></div><div class=\"TTSummary\">A file source that handles monitoring all the style files, both project and system.</div></div>"});