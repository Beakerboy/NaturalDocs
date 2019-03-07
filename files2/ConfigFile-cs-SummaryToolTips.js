NDSummary.OnToolTipsLoaded("File2:ConfigFile.cs",{4095:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;ConfigFile</div></div></div><div class=\"TTSummary\">A class to handle reading standard Natural Docs text-based configuration files.&nbsp; It also provides the static function TryToAnnotateWithErrors() but is otherwise not used for writing.</div></div>",4096:"<div class=\"NDToolTip TInformation LCSharp\"><div class=\"TTSummary\">All configuration files are text files in UTF-8.&nbsp; They may appear with or without the Unicode BOM and using any line break format.&nbsp; The parsing behavior can be tweaked on a file by file basis by setting the FileFormatFlags.</div></div>",4098:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype4098\" class=\"NDPrototype NoParameterForm\"><div class=\"PPrePrototypeLine\"><span class=\"SHMetadata\">[Flags]</span></div><span class=\"SHKeyword\">public enum</span> FileFormatFlags : <span class=\"SHKeyword\">byte</span></div></div>",4106:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4106\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> ConfigFile ()</div><div class=\"TTSummary\">Creates the object.&nbsp; Does not open a file.</div></div>",4107:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Open (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Path&nbsp;</td><td class=\"PName last\">newFileName,</td></tr><tr><td class=\"PType first\">FileFormatFlags&nbsp;</td><td class=\"PName last\">newFileFormatFlags,</td></tr><tr><td class=\"PType first\">ErrorList&nbsp;</td><td class=\"PName last\">newErrorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to open the passed configuration file and returns whether it was successful.&nbsp; Any errors encountered in trying to open the file will be added to the errors array.</div></div>",4108:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4108\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Close ()</div><div class=\"TTSummary\">Closes the file if one was open.</div></div>",4109:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4109\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Get (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">identifier,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next identifier/value pair, if any.&nbsp; Returns whether it was successful.</div></div>",4110:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4110\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddError (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">errorMessage,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">Source&nbsp;</td><td class=\"PName\">configSource&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Config.Source.NotDefined,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">property&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds an error to the list, automatically filling in the file and line number properties based on the last call to Get().</div></div>",4112:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4112\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> GetLine ()</div><div class=\"TTSummary\">Returns the next line of the file, splitting braces into separate lines if supported.&nbsp; The line will not have line break characters at the end of it.&nbsp; Otherwise it does not process the line in any way, so comments and blank lines will be returned and all whitespace will be intact.&nbsp; Does advance lineNumber though.</div></div>",4114:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4114\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Dispose ()</div></div>",4116:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype4116\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> IsOpen { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether the class has a file open.</div></div>",4117:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype4117\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Engine.Version Version { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The Engine.Version of the file if one is open, null otherwise.</div></div>",4118:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype4118\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Path FileName { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The Path to the open file, or null if none.</div></div>",4119:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype4119\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> LineNumber { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the line number of the last line returned by Get(), or zero if it hasn\'t been called yet.</div></div>",4121:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static public void</span> TryToAnnotateWithErrors (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ErrorList&nbsp;</td><td class=\"PName last\">errorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to provide comment annotations for all the config files with errors appearing in a passed ErrorList.&nbsp; Only errors that have Error.File and Error.LineNumber set will be applied.</div></div>",4122:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4122\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static public void</span> TryToRemoveErrorAnnotations (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Path&nbsp;</td><td class=\"PName last\">file</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to remove any error annotations from the passed config file.&nbsp; This is provided for system config files that don\'t normally rewrite themselves.</div></div>",4123:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4123\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> SaveIfDifferent (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName\">filename,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">newContent,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">noErrorOnFail,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName\">errorList&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Saves the passed content to the file if it\'s meaningfully different than what\'s already there.&nbsp; Checking the existing content prevents unnecessary writes and timestamp changes.&nbsp; Returns whether it was successful.</div></div>",4125:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4125\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> StreamReader file</div><div class=\"TTSummary\">The currently open file, or null if none.</div></div>",4126:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4126\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Path fileName</div><div class=\"TTSummary\">The Path of the file currently being parsed, or null if none.</div></div>",4127:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4127\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Engine.Version version</div><div class=\"TTSummary\">The version of the file if one is open, null otherwise.</div></div>",4128:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4128\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> FileFormatFlags fileFormatFlags</div><div class=\"TTSummary\">The file format flags of the currently open file.</div></div>",4129:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4129\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected int</span> lineNumber</div><div class=\"TTSummary\">The line number of the last value returned, or zero if none.</div></div>",4130:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4130\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> restOfLine</div><div class=\"TTSummary\">If a line is being split because of braces, this string will hold the rest of it between calls.&nbsp; Null otherwise.</div></div>",4131:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4131\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> ErrorList errorList</div><div class=\"TTSummary\">A reference to the list of errors to add to if we encounter any.</div></div>",4132:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4132\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static protected char</span>[] BracesChars</div><div class=\"TTSummary\">An array of braces characters for use with IndexOfAny(char[]).</div></div>",4133:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4133\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static public</span> Regex.Config.FormatLine FormatLineRegex</div></div>"});