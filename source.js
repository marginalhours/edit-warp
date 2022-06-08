javascript: (() => {
  const comments = [
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions" title="Wikipedia:Manual of Style/Words to watch"><span title="The material near this tag may use weasel words or too-vague attribution.">according to whom?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Anachronism" title="Anachronism"><span title="This statement does not suit the time period in question.">anachronism</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Attribution_needed" title="Wikipedia:Attribution needed"><span title="This sentence may contain perspectives and opinions without stating whose they are.">attribution needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Basic_copyediting" title="Wikipedia:Basic copyediting"><span title="The text preceding this tag may require copy editing for grammar, style, cohesion, tone, or spelling.">needs copy edit</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions" title="Wikipedia:Manual of Style/Words to watch"><span title="The material near this tag may use weasel words or too-vague attribution.">by whom?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources#What_information_to_include" title="Wikipedia:Citing sources"><span title="A complete citation is needed.">full citation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources.">citation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Inline_citation#When_you_must_use_inline_citations" title="Wikipedia:Inline citation"><span title="The text near this tag needs a citation.">This quote needs a citation</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Please_clarify" title="Wikipedia:Please clarify"><span title="The text near this tag may need clarification or removal of jargon.">clarification needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Category:Articles_contradicting_other_articles" title="Category:Articles contradicting other articles"><span title="This text contradicts material elsewhere on this page.">contradictory</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Category:Articles_contradicting_other_articles" title="Category:Articles contradicting other articles"><span title="This text contradicts material elsewhere on this page.">contradictory</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="">dead link</span></a></i>]</span></sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:WikiProject_Disambiguation/Fixing_links" title="Wikipedia:WikiProject Disambiguation/Fixing links"><span title="Link needs disambiguation">disambiguation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Consensus" title="Wikipedia:Consensus"><span title="This claim has reliable sources with contradicting facts">disputed</span></a> <span class="metadata"> – <a href="/wiki/Wikipedia_talk:WikiProject_Inline_Templates" title="Wikipedia talk:WikiProject Inline Templates">discuss</a></span></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Accuracy_dispute#Disputed_statement" title="Wikipedia:Accuracy dispute"><span title="The material near this tag is possibly inaccurate or nonfactual.">dubious</span></a> <span class="metadata"> – <a href="/wiki/Wikipedia_talk:WikiProject_Inline_Templates#Dubious" title="Wikipedia talk:WikiProject Inline Templates">discuss</a></span></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Please_clarify" title="Wikipedia:Please clarify"><span title="The text near this tag needs further explanation.">further explanation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This claim needs references to the episode(s) in which it occurs">episode&nbsp;needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The material near this tag failed verification of its source citation(s).">failed verification</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:BALANCE" class="mw-redirect" title="Wikipedia:BALANCE"><span title="The material near this tag seems to express a non-neutral point of view.">unbalanced opinion?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Identifying_reliable_sources_(medicine)" title="Wikipedia:Identifying reliable sources (medicine)"><span title="Material near this tag needs references to reliable medical sources.">medical citation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Identifying_reliable_sources_(medicine)" title="Wikipedia:Identifying reliable sources (medicine)"><span title="Material near this tag may rely on an unreliable or less reliable medical source.">unreliable medical source?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The citation is not specific enough to facilitate source verification">not specific enough to verify</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:No_original_research" title="Wikipedia:No original research"><span title="The material near this tag possibly contains original research.">original research?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This citation requires a reference to the specific page or range of pages in which the material appears.">page&nbsp;needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Neutral_point_of_view" title="Wikipedia:Neutral point of view"><span title="This statement is possibly biased.">neutrality</span></a> is <a href="/wiki/Wikipedia_talk:WikiProject_Inline_Templates" title="Wikipedia talk:WikiProject Inline Templates">disputed</a></i>]</sup>',
    '<sup class="noprint Inline-Template noprint Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources" title="Wikipedia:No original research"><span title="This claim needs references to reliable secondary sources.">non-primary source needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="Quotation needed from source to verify.">need quotation to verify</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Template:Cite_episode/doc" title="Template:Cite episode/doc"><span title="This claim needs references to the season(s) in which it occurs.">season and episode needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="Statement needs to be more specific about the content to which it refers.">specify</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:No_original_research#Synthesis_of_published_material" title="Wikipedia:No original research"><span title="The material near this tag may be based upon an improper synthesis of sources.">improper synthesis?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Reliable_sources" title="Wikipedia:Reliable sources"><span title="The material near this tag may rely on an unreliable source.">unreliable source?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items" title="Wikipedia:Manual of Style/Dates and numbers"><span title="The text near this tag is dated.">needs update</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Vagueness" title="Wikipedia:Vagueness"><span title="This information is too vague.">vague</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The material near this tag needs to be fact-checked with the cited source(s).">verification needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This citation requires a reference to the specific volume in which the source appears.">volume&nbsp;&amp;&nbsp;issue&nbsp;needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Avoid_weasel_words" class="mw-redirect" title="Wikipedia:Avoid weasel words"><span title="Who says this?">weasel&nbsp;words</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Naming_conventions_(geographic_names)" title="Wikipedia:Naming conventions (geographic names)"><span title="The geographic scope near this tag is ambiguous.">where?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions" title="Wikipedia:Manual of Style/Words to watch"><span title="The material near this tag possibly uses too-vague attribution or weasel words.">who?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers" title="Wikipedia:Manual of Style/Dates and numbers"><span title="Need the year this event took place">year&nbsp;needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_not_a_crystal_ball" title="Wikipedia:What Wikipedia is not"><span title="A number, date or other piece of information needs to be added.">to be determined</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:LABEL" class="mw-redirect" title="Wikipedia:LABEL"><span title="A statement that uses a contentious, value-laden label.">contentious label</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The quotation near this tag needs to be fact-checked with the cited source to ensure that it actually exists, is accurate, and is not taken out of context.">verify</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template noprint Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:AGE_MATTERS" class="mw-redirect" title="Wikipedia:AGE MATTERS"><span title="This claim needs references to more current sources.">obsolete&nbsp;source</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style#Acronyms_and_abbreviations" title="Wikipedia:Manual of Style"><span title="The text near this tag needs the full version of this acronym at first occurrence.">expand acronym</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Romanization" title="Wikipedia:Romanization"><span title="This word or these words should have a romanized transliteration or transcription.">romanization needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Pronunciation" title="Wikipedia:Manual of Style/Pronunciation"><span title="IPA transcription needed for this word. You can help!">needs  IPA</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Neutral_point_of_view#Due_and_undue_weight" title="Wikipedia:Neutral point of view"><span title="The material near this tag may be giving undue weight to a viewpoint or idea.">undue weight?</span></a> <span class="metadata"> – <a href="/wiki/Wikipedia_talk:WikiProject_Inline_Templates#undue" title="Wikipedia talk:WikiProject Inline Templates">discuss</a></span></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:What_Wikipedia_is_not#CRYSTAL" title="Wikipedia:What Wikipedia is not"><span title="Material appears to be speculative in nature.">speculation?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources in the body of the article.">not verified in body</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Puffery" title="Wikipedia:Manual of Style/Words to watch"><span title="Unverified descriptions">peacock&nbsp;prose</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:What_Wikipedia_is_not#Encyclopedic_content" title="Wikipedia:What Wikipedia is not"><span title="The material preceding this tag may lack sufficient importance.">importance?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources#What_information_to_include" title="Wikipedia:Citing sources"><span title="A complete citation is needed.">full citation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Attribution_needed" title="Wikipedia:Attribution needed"><span title="This sentence may contain perspectives and opinions without stating whose they are.">attribution needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:EDITORIALIZING" class="mw-redirect" title="Wikipedia:EDITORIALIZING"><span title="A statement that draws an independent conclusion.">editorializing</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:EDITORIALIZING" class="mw-redirect" title="Wikipedia:EDITORIALIZING"><span title="A statement that draws an independent conclusion.">editorialising</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Identifying_reliable_sources_(natural_sciences)" class="mw-redirect" title="Wikipedia:Identifying reliable sources (natural sciences)"><span title="Material near this tag needs references to reliable scientific sources.">scientific citation needed</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Identifying_reliable_sources_(natural_sciences)" class="mw-redirect" title="Wikipedia:Identifying reliable sources (natural sciences)"><span title="Material near this tag may use an unreliable or less reliable scientific source.">unreliable scientific source?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Pronunciation" title="Wikipedia:Manual of Style/Pronunciation"><span title="This word should have a pronunciation transcription or recording.">pronunciation?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Writing_better_articles#Stay_on_topic" title="Wikipedia:Writing better articles"><span title="The material near this tag may contain information that is not relevant to the article\'s main topic.">relevant?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability#Self-published_sources" title="Wikipedia:Verifiability"><span title="The material near this tag may rely on a self-published source.">self-published source?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Spam#External_link_spamming" title="Wikipedia:Spam"><span title="The preceding link looks like spam: it appears to be for the purpose of promoting a website, product or individual.">spam&nbsp;link?</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:AUDIENCE" class="mw-redirect" title="Wikipedia:AUDIENCE"><span title="An editor has requested that an example be provided."><span style="padding-right:0.1em;">example  needed</span></span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:AUDIENCE" class="mw-redirect" title="Wikipedia:AUDIENCE"><span title="An editor has requested that an example be provided."><span style="padding-right:0.1em;">example  needed</span></span></a></i>]</sup>',
    '<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="Please supply an ISBN for this book.">ISBN&nbsp;missing</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template noprint Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Verifiability#Wikipedia_and_sources_that_mirror_or_use_it" title="Wikipedia:Verifiability"><span title="This claim cites another Wikipedia article. Articles need references to reliable third-party sources.">circular reference</span></a></i>]</sup>',
    '<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers" title="Wikipedia:Manual of Style/Dates and numbers"><span title="This term requires quantification.">quantify</span></a></i>]</sup>',
  ];

  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  function adjacentSupCount(node) {
    let count = 0;
    while (node.nextSibling && count < 5) {
      if (node.nextSibling.tagName === "SUP") {
        count += 1;
      }
      node = node.nextSibling;
    }
    return count;
  }

  function canModify(node) {
    return (
      node.nodeType === 3 &&
      node.textContent.indexOf(".") !== -1 &&
      adjacentSupCount(node) < 4 &&
      Math.random() > 1 - 0.5
    );
  }

  function addMarkup(para) {
    let i = 0;
    const originalNodes = Array.from(para.childNodes);

    while (i < originalNodes.length) {
      const node = originalNodes[i];
      if (canModify(node)) {
        node.splitText(node.textContent.indexOf(".") + 1);
        const comment = comments[Math.floor(Math.random() * comments.length)];
        const fragment = htmlToElement(comment);
        para.insertBefore(fragment, node.nextSibling);
        i += 1;
      }
      i += 1;
    }
  }

  Array.from(
    document.querySelector("#mw-content-text").querySelectorAll("p")
  ).map((p) => addMarkup(p));
})();
