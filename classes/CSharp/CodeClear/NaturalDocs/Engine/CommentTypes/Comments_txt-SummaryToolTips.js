NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.CommentTypes.Comments_txt",{433:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype433\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CommentTypes.</span>&#8203;Comments_txt</div></div></div><div class=\"TTSummary\">A class to handle loading and saving Comments.txt and Topics.txt.</div></div>",434:"<div class=\"NDToolTip TFile LCSharp\"><div class=\"TTSummary\">The configuration file that defines or overrides the comment type definitions for Natural Docs.&nbsp; One version sits in Natural Docs\' configuration folder, and another in the project configuration folder to add comment types or override their behavior.</div></div>",436:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype436\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Comments_txt ()</div></div>",438:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype438\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Load (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;ConfigFileCommentType&gt;&nbsp;</td><td class=\"PName last\">fileCommentTypes,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">fileIgnoredKeywords,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">fileTags,</td></tr><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName last\">errorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the passed configuration file and parses it.&nbsp; Redundant information will be simplified out, such as an Alter Comment Type section that applies to a comment type defined in the same file.</div></div>",439:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype439\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> NeedsCommentTypeError (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConfigFile&nbsp;</td><td class=\"PName last\">file,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">identifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A shortcut function only used by Load() which adds an error stating that the passed keyword needs to appear in a comment type section.</div></div>",441:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype441\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Save (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">List&lt;ConfigFileCommentType&gt;&nbsp;</td><td class=\"PName last\">commentTypes,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">ignoredKeywords,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">tags,</td></tr><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName last\">errorList,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isProjectFile,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">noErrorOnFail</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Saves the passed information into a configuration file if it\'s different from the one on disk.</div></div>",442:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype442\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> AppendKeywordList (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">System.Text.</td><td class=\"PType\">StringBuilder&nbsp;</td><td class=\"PName last\">output,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">keywords,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">prefix</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A function used only by Save() that adds a keyword list to the passed StringBuilder.</div></div>",443:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype443\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> LineBreakOnGroupChange (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">groupNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">oldGroupNumber,</td></tr><tr><td class=\"PModifierQualifier first\">System.Text.</td><td class=\"PType\">StringBuilder&nbsp;</td><td class=\"PName last\">output</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A shortcut function used only by Save() which inserts a line break between groups.&nbsp; It will also update oldGroupNumber automatically.</div></div>",445:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype445\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.Config.Yes yesRegex</div></div>",446:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.Config.No noRegex</div></div>",447:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype447\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.ScopeStart startRegex</div></div>",448:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.ScopeEnd endRegex</div></div>",449:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype449\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.NonASCIILetters nonASCIILettersRegex</div></div>",450:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.IgnoreKeywords ignoreKeywordsRegex</div></div>",451:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype451\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.CommentType commentTypeRegex</div></div>",452:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.AlterCommentType alterCommentTypeRegex</div></div>",453:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype453\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.DisplayName displayNameRegex</div></div>",454:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.PluralDisplayName pluralDisplayNameRegex</div></div>",455:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype455\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.DisplayNameFromLocale displayNameFromLocaleRegex</div></div>",456:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype456\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.PluralDisplayNameFromLocale pluralDisplayNameFromLocaleRegex</div></div>",457:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype457\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.Flags flagsRegex</div></div>",458:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype458\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.Documentation documentationRegex</div></div>",459:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype459\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.VariableType variableTypeRegex</div></div>",460:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype460\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.ClassHierarchy classHierarchyRegex</div></div>",461:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype461\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.DatabaseHierarchy databaseHierarchyRegex</div></div>",462:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype462\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.Enum enumRegex</div></div>",463:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype463\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.BreakLists breakListsRegex</div></div>",464:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype464\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.Keywords keywordsRegex</div></div>",465:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype465\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CondensedWhitespaceCommaSeparator commaSeparatorRegex</div></div>",466:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype466\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.ScopeAlwaysGlobal alwaysGlobalRegex</div></div>",467:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype467\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Regex.CommentTypes.Tags tagsRegex</div></div>",469:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype469\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected static char</span>[] BannedKeywordChars</div><div class=\"TTSummary\">An array containing all the characters that cannot appear in keywords.&nbsp; Best used with String.IndexOfAny().</div></div>"});