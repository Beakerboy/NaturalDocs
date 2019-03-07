NDSummary.OnToolTipsLoaded("File2:CodeDB/Accessor.SQL.cs",{289:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype289\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;Accessor</div></div></div></div>",291:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype291\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> List&lt;Topic&gt; GetTopics (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">whereClause,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">orderByClause,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName\">clauseParameters,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A generic function for retrieving all the Topics that satisfy the passed WHERE clause.&nbsp; If there are none it will return an empty list.</div></div>",292:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype292\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Topic&gt; GetTopicsInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">fileID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the topics present in the passed file ID.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",293:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype293\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Topic&gt; GetTopicsInClass (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">classID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the topics present in the passed class ID.&nbsp; The topics will be grouped by file, but the files will be in no particular order.&nbsp; If there are no topics it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",294:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype294\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Topic&gt; GetTopicsByID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName\">topicIDs,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves all the Topics present in a list of topic IDs.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",295:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype295\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Topic&gt; GetTopicsByEndingSymbol (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IEnumerable&lt;EndingSymbol&gt;&nbsp;</td><td class=\"PName\">endingSymbols,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the topics which use one of the passed EndingSymbols.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",296:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype296\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Topic&gt; GetBestClassDefinitionTopics (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName\">classIDs,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">GetTopicFlags&nbsp;</td><td class=\"PName\">getTopicFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetTopicFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the Topics that serve as the best class definitions of the passed class IDs.&nbsp; There will only be one Topic per class ID, even if multiple Topics define them.&nbsp; If a class ID doesn\'t have any Topics that define it (as opposed to just being a member of it) it will not have an entry in the list.</div></div>",297:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype297\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddTopic (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Topic&nbsp;</td><td class=\"PName last\">topic</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a Topic to the database.&nbsp; Assumes it doesn\'t exist; if it does, you need to use UpdateTopic() or call DeleteTopic() first.</div></div>",298:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype298\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> UpdateTopic (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Topic&nbsp;</td><td class=\"PName last\">oldTopic,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Topic&nbsp;</td><td class=\"PName last\">newTopic,</td></tr><tr><td class=\"PModifierQualifier first\">Topic.</td><td class=\"PType\">ChangeFlags&nbsp;</td><td class=\"PName last\">changeFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs minor updates to an existing Topic in the database as determined by Topic.DatabaseCompare().&nbsp; If Topic.DatabaseCompare() returns Topic.DatabaseCompareResult.Different instead of Topic.DatabaseCompareResult.Similar_WontAffectLinking you cannot use this function.&nbsp; You must delete the old topic and add it as a new one instead.</div></div>",299:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype299\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteTopic (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Topic&nbsp;</td><td class=\"PName last\">topic</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a topic from the database.</div></div>",300:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype300\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> UpdateTopicsInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">IList&lt;Topic&gt;&nbsp;</td><td class=\"PName last\">newTopics,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Replaces all the topics in the database under the passed file ID with the passed list.&nbsp; It will query the existing topics itself, perform a comparison, and call AddTopic(), UpdateTopic(), and DeleteTopic() as necessary.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",301:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype301\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteTopicsInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Deletes all the topics in the database under the passed file ID.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",303:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype303\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> List&lt;Link&gt; GetLinks (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">whereClause,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName\">clauseParameters,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A generic function for retrieving all the Links that satisfy the passed WHERE clause.&nbsp; If there are none it will return an empty list.</div></div>",304:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype304\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Link GetLinkByID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">linkID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a link by its ID.&nbsp; Assumes the link already exists.</div></div>",305:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype305\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">fileID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the links present in the passed file ID.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",306:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype306\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetLinksInClass (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">classID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the links present in the passed class ID.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",307:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype307\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetNaturalDocsLinksInFiles (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName\">fileIDs,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the Natural Docs links present in the passed file IDs.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",308:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetClassParentLinksInClasses (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName\">classIDs,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the class parent links present for the passed class IDs.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",309:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetClassParentLinksToClasses (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName\">classIDs,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the class parent links that resolve to the passed class IDs.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",310:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype310\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; GetLinksByEndingSymbol (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EndingSymbol&nbsp;</td><td class=\"PName\">endingSymbol,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetLinkFlags&nbsp;</td><td class=\"PName\">getLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the Links present that use the passed EndingSymbol.&nbsp; Note that this also searches &lt;CodeDB.AlternateLinkEndingSymbols&gt; so the actual Link object may not have the passed EndingSymbol as a property.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",311:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype311\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddLink (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Link&nbsp;</td><td class=\"PName last\">link</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a Link to the database.&nbsp; Assumes it doesn\'t already exist.</div></div>",312:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype312\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteLink (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Link&nbsp;</td><td class=\"PName last\">link</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a Link from the database.</div></div>",313:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype313\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> UpdateLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">IEnumerable&lt;Link&gt;&nbsp;</td><td class=\"PName last\">newLinks,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Replaces all the links in the database under the passed file ID with the passed list.&nbsp; It will query the existing links itself, perform a comparison, and call AddLink() and DeleteLink() as necessary.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",314:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype314\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Deletes all the links in the database under the passed file ID.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",315:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype315\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;EndingSymbol&gt; GetAlternateLinkEndingSymbols (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">linkID</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the list of alternate EndingSymbols for a link ID.&nbsp; It will not include the EndingSymbol stored in the Link itself.&nbsp; If there are no alternate symbols it will return null.</div></div>",316:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype316\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> UpdateLinkTarget (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Link&nbsp;</td><td class=\"PName last\">link,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">oldTargetTopicID,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">oldTargetClassID</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the score and interpretation of a link in the database.&nbsp; Assumes both IDs already exist.</div></div>",318:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype318\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> List&lt;ImageLink&gt; GetImageLinks (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">whereClause,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName\">clauseParameters,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetImageLinkFlags&nbsp;</td><td class=\"PName\">getImageLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetImageLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A generic function for retrieving all the ImageLinks that satisfy the passed WHERE clause.&nbsp; If there are none it will return an empty list.</div></div>",319:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;ImageLink&gt; GetImageLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">fileID,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName\">cancelled,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">GetImageLinkFlags&nbsp;</td><td class=\"PName\">getImageLinkFlags&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">GetImageLinkFlags.Everything</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the image links present in the passed file ID.&nbsp; If there are none it will return an empty list.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",320:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddImageLink (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ImageLink&nbsp;</td><td class=\"PName last\">imageLink</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds an ImageLink to the database.&nbsp; Assumes it doesn\'t already exist.</div></div>",321:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteImageLink (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ImageLink&nbsp;</td><td class=\"PName last\">imageLink</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes an ImageLink from the database.</div></div>",322:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> UpdateImageLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">IEnumerable&lt;ImageLink&gt;&nbsp;</td><td class=\"PName last\">newLinks,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",323:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> DeleteImageLinksInFile (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fileID,</td></tr><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Deletes all the image links in the database under the passed file ID.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.</div></div>",325:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype325\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ClassString GetClassByID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">classID</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the class with the passed ID.&nbsp; Even if a class has been deleted this will still return a ClassString until &lt;Cleanup()&gt; is called.</div></div>",326:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;KeyValuePair&lt;<span class=\"SHKeyword\">int</span>, ClassString&gt;&gt; GetClassesByID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName last\">ids,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves a list of all the classes defined in the database within the passed NumberSet.&nbsp; Pass a CancelDelegate if you\'d like to be able to interrupt this process, or Delegates.NeverCancel if not.&nbsp; If some of the classes have been deleted this will still return values for them until &lt;Cleanup()&gt; is called.</div></div>",327:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype327\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> GetOrCreateClassID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ClassString&nbsp;</td><td class=\"PName last\">classString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the ID for the ClassString.&nbsp; If an existing ID cannot be found, one will be created.</div></div>",328:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> FlushClassIDReferenceChangeCache (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies anything waiting in CodeDB.Manager.ClassIDReferenceChangeCache to the database.</div></div>",330:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> GetOrCreateContextID (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ContextString&nbsp;</td><td class=\"PName last\">contextString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the ID for the ContextString.&nbsp; If an existing ID cannot be found, one will be created.</div></div>",331:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> FlushContextIDReferenceChangeCache (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies anything waiting in CodeDB.Manager.ContextIDReferenceChangeCache to the database.</div></div>",333:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype333\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected void</span> BeginTransaction ()</div><div class=\"TTSummary\">Starts a new transaction.&nbsp; Transactions can be nested within one another.</div></div>",334:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected void</span> CommitTransaction ()</div><div class=\"TTSummary\">Commits an existing transaction to the database.</div></div>",335:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype335\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected void</span> RollbackTransactionForException ()</div><div class=\"TTSummary\">Rolls back an existing transaction from the database because an exception occurred.&nbsp; This is the ONLY reason you can roll back a transaction because there are other state changes within Natural Docs that occur and would not be reverted with the database.&nbsp; This function only exists so that you can get out of the transaction if an exception occurs, which prevents an additional exception from occurring if you try to dispose of the Accessor while a transaction is still in effect.&nbsp; You cannot start a new transaction after this occurs, you should be exiting the program.</div></div>",337:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype337\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static public string</span> ColumnIsInNumberSetExpression (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">columnName,</td></tr><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName last\">numberSet,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span> IDObjects.</td><td class=\"PType\">NumberSet&nbsp;</td><td class=\"PName last\">remaining</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Generates a SQL expression for testing that a column\'s value is contained in a number set which can be used in WHERE clauses.</div></div>"});