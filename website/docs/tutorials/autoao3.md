---
sidebar_position: 4
sidebare_label: How to Filter the AutoAO3 App
---

# How to Filter the AutoAO3 App

The **AutoAO3 App** was made by a fandom coder who wanted a more visually pleasing way to look at requests during exchanges. It has a few benefits over the traditional google sheets used by lots of exchanges, including the ability to bookmark prompts you're interested in, and the ability to filter prompts, even if you don't own the sheet. The tips below show you how to use this powerful tool.

<details>
<summary>Prepping to filter/search.</summary>

The app works by scraping the data already available on AO3. That's a fancy way of saying that it uses code to pull the exchange's info from AO3, get what it wants, and spit back out again in a visually pleasing format. There are a couple of things you can and **should** do to make your filtering more pleasant.

1. Start by rescraping the data. (*Optional.*)
    The mods are pretty dilligent about rescraping (getting the new info) about sign-ups a couple of times a day, but if you want to rescrape to ensure you have the most up to date versions, you are more than welcome to do so. It won't hurt anything!

    The app displays the last time the info was scraped in a dark gray bar in your local time. To rescrape, simply hit the red `Re-scrape` button and wait for 5-15 minutes for it to get all the new data. Then, refresh your page.

<a href="#img1" class="preview">
<img src={require('/img/tutorial/scrape.png').default} alt="Re-scrape Button"  class="thumbnail" />
</a>
<p class="label">Re-scrape Button: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img1">
<img src={require('/img/tutorial/scrape.png').default} />
</a>

2. Load all the data.

    The app only loads 50 requests initially. Please note this is NOT 50 users, but 50 individual requests - so if 5 people have 10 requests each that's all 50 request spots it will load.

    To get everything, drag your scrollbar to the bottom of the window until you can't drag it anymore. That's it! You're now ready to filter everything.

<a href="#img2" class="preview">
<img src={require('/img/tutorial/first50.png').default} alt="First 50 Requests"  class="thumbnail" />
</a>
<p class="label">First 50 Requests Only: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img2">
<img src={require('/img/tutorial/first50.png').default} />
</a>

<a href="#img3" class="preview">
<img src={require('/img/tutorial/allrequests.png').default} alt="All Requests"  class="thumbnail" />
</a>
<p class="label">All Requests: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img3">
<img src={require('/img/tutorial/allrequests.png').default} />
</a>

:::tip

You can use the (^) symbol on the bottom right of the screen to jump to the
top if there are a lot of requests!

:::

</details>

<details>
<summary>Which filters to use.</summary>

The most useful tab for finding specific requests (and Treatless!) is the **All** tab, but there are several filters available which simply won't work for our exchange.

<a href="#img4" class="preview">
<img src={require('/img/tutorial/whichfilters.png').default} alt="Which Filters to Use"  class="thumbnail" />
</a>
<p class="label">Which Filters to Use: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img4">
<img src={require('/img/tutorial/whichfilters.png').default} />
</a>

- since we use `Dragon Age - All Media Types` to sign-up sorting by *Fandom* won't help. 
- *Characters* only works if the Sign-Up sheet itself uses the Characters field; since our sign-up sheet uses the Relationships field this will not work for us. 
- we do not allow *Optional Tags* during sign-up.

</details>

<details>
<summary>Filtering relationships.</summary>

If you're looking to create for a specific character or ship or want to see what's been requested for a specific character or ship this is the place to start. Using the *Relationships* field you can search for an entire tag (i.e.
`Solas & Mythal`), or for just an individual character (i.e. `Bull`).

<a href="#img5" class="preview">
<img src={require('/img/tutorial/shipfilter.png').default} alt="Relationship Filter"  class="thumbnail" />
</a>
<p class="label">Relationship Filter: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img5">
<img src={require('/img/tutorial/shipfilter.png').default} />
</a>

It's important to note that by default the filter does NOT look for exact matches. In fact it uses an "and" to search. This means that entering `Bull Hawke` would pull up any tags where both The Iron Bull AND Hawke (Female Hawke, Male Hawke, Carver Hawke, Bethany Hawke, Leandra Hawke, etc) show up. To pull up an <u>exact</u> match for a character who shares first or last names with another character you need to enclose it in quotes (i.e. "Male Hawke").

<a href="#img6" class="preview">
<img src={require('/img/tutorial/exactshipfilter.png').default} alt="Exact Relationship Filter using Quotes" class="thumbnail" />
</a>
<p class="label">Exact Relationship Filter: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img6">
<img src={require('/img/tutorial/exactshipfilter.png').default} />
</a>

**Other search short cuts include:**
- Using `|` (vertical line) for "or". `Tabris | Mahariel` would provide a list of requests where either Tabris or Mahariel (of any gender) shows up in the ship.
- Using `!` (exclamation) for "not". `Aeducan !Female` would provide a list of requests with Male or Nonbinary Aeducans.
- Combining multiple options. `Alistair Morrigan Amell | Cousland !Female` would look for requests with Alistair and Morrigan and either an Amell or Cousland not containing the word Female (so Male or Nonbinary).

</details>

<details>
<summary>Filtering prompts.</summary>

The *Prompts* field is useful as a filter if you're looking to write or draw a specific trope, kink, etc. For example, if you're really in the mood to give someone a BDSM treat you can filter on `BDSM`. This field is more limited than the *Relationships* field as the "or" and "not" designations do not work. However, using quotes for an exact match on a phrase <u>does</u> work. This means you can filter for   `"coffee shop au"` and find only that phrase rather than searching `coffee shop au` and getting results which have `coffee` and `shop` and `au` as separate searches.

<a href="#img7" class="preview">
<img src={require('/img/tutorial/coffeeshopau.png').default} alt="Exact Coffee Shop AU" class="thumbnail" />
</a>
<p class="label">Exact Search Results: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img7">
<img src={require('/img/tutorial/coffeeshopau.png').default} />
</a>

<a href="#img8"  class="preview">
<img src={require('/img/tutorial/promptsearch.png').default} alt="Coffee Shop AU" class="thumbnail" />
</a>
<p class="label">Search without Quotes: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img8">
<img src={require('/img/tutorial/promptsearch.png').default} />
</a>

Notice the filter without quotations returns more results than the filter with quotations.

:::warning

Please be sure to read the prompts that are returned thoroughly. This filter can't tell if the person has listed your search as a want or a *DNW*, it can only detect that the words are present in the request.

:::

</details>

<details>
<summary>Filtering by type (and treatless!).</summary>

In order to help with matching, our sign-ups use the *Freeform* field to designate whether fanart or fanfic are being requested. For your assigned recipient, you should look for the `Fanfic` or `Fanart` tags on their prompt which designates their desire for their main gift.

If you're looking to complete treats of a specific type, you can search for participants who want those treats the below tags:
- `Treats - Fanart` for Fanart treats.
- `Treats - Fanfic` for Fanfic treats.
- `Treats - Other` for alternative fanwork treats.

:::tip

This field is <u>not</u> case sensitive, but it is limited to searching for only one tag at a time.

:::

:::caution

Be sure to use the full tags listed above for searching for treats to give. Entering just `Treats` will return every tag that has the word "treats" in it including `No Treats Please`, and searching for just "fanfic" or "fanart" could return requests which are only looking for those as a <u>Main</u> gift and not a treat.

:::

<a href="#img9">
<img src={require('/img/tutorial/freeformfilter.png').default} alt="Searching For Treats Types"  class="thumbnail" />
</a>
<p class="label">Searching For Treats Types: click to enlarge</p>

<a href="#_" class="lightbox" id="img9">
<img src={require('/img/tutorial/freeformfilter.png').default} />
</a>

In addition, you can tell if someone has received a treat, because the Mods will be adding a `Treat Received` tag on their prompts. That means you can find Treatless participants by searching for `!"Treat Received"` in this field.

<a href="#img10" class="preview">
<img src={require('/img/treatreceived.png').default} alt="Treatless Filtering" class="thumbnail"></img>
</a>
<p class="label">Treatless Filtering: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img10">
<img src={require('/img/treatreceived.png').default}></img>
</a>

You can read more about treats in the [Treats & Treatless FAQ](/docs/treats).

</details>

<details>
<summary>Searching for AO3 Users.</summary>

On the far right of the screen there is a **User Search** tab which allows you to find a specific user's prompt. You can use this to find an easier to read version of your assigned recipients's requests or look for friends' sign-ups. The search requires the <u>exact</u> username with punctuation, capital letters, etc, in order to work.

Simply enter the username in the search and hit go.

<a href="#img11"  class="preview">
<img src={require('/img/tutorial/usersearch.png').default} alt="User Search"  class="thumbnail" />
</a>
<p class="label">User Search: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img11">
<img src={require('/img/tutorial/usersearch.png').default} />
</a>

This will pull every request from the user and display them below.

<a href="#img12" class="preview">
<img src={require('/img/tutorial/usersearch1.png').default} alt="User Results"  class="thumbnail" />
</a>
<p class="label">User Results: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img12">
<img src={require('/img/tutorial/usersearch1.png').default} />
</a>

</details>

<details>
<summary>Filtering the tagset.</summary>

AutoAo3 also loads the entire tagset for viewing into the app. You can see the entire list or filter by character on the **Tagset** tab to the right of the **All** tab. To view the tags included in our tagset, click on `All Fandoms in All Catgories` → `Dragon Age - All Media Types`. This brings up the entire nominated tag list. You can then use the *Filter Characters* field to look for ships which have a specific character or scroll through to view the whole list.

<a href="#img13" class="preview">
<img src={require('/img/tutorial/tagsetfilter.png').default} alt="Tagset Filter" class="thumbnail" />
</a>
<p class="label">Tagset Filter: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img13">
<img src={require('/img/tutorial/tagsetfilter.png').default} />
</a>

:::note

The Nominations Spreadsheet does remain up throughout the exchange, so you can always check it for tags as well.

:::

</details>

<details>
<summary>Bookmarking requests.</summary>

You can use the app to bookmark fandoms (not very useful for this exchange) or specific requests you're interested in fulfilling. The bookmarks are stored <u>per browser</u>. There are instructions for how to move your bookmarks across browsers if you need/want to under *Show Backup Instructions*. To bookmark something, simply click the heart next to the name.

<a href="#img14" class="preview">
<img src={require('/img/tutorial/bookmarking.png').default} alt="Click the Heart to Bookmark" class="thumbnail" />
</a>
<p class="label">Click the Heart to Bookmark: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img14">
<img src={require('/img/tutorial/bookmarking.png').default} />
</a>

Anything you bookmark is moved to the **Bookmarks** tab for you. To remove, simply click the heart again.

<a href="#img15" class="preview">
<img src={require('/img/tutorial/bookmarkstab.png').default} alt="Bookmarks Tab" class="thumbnail" />
</a>
<p class="label">Bookmarks Tab: click to enlarge</p>
<p> </p>
<a href="#_" class="lightbox" id="img15">
<img src={require('/img/tutorial/bookmarkstab.png').default} />
</a>

</details>