import Image from "next/image";

export const metadata = {
  title: "The Paper — Modern Exodus",
  description:
    "A Modern Exodus by Austin Morrow. An exposition of the Exodus narrative as it maps onto present-day systemic oppression.",
};

export default function PaperPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-stone-200 pb-12 mb-12">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">
          The Paper
        </p>
        <h1 className="font-display text-5xl font-semibold text-stone-900 mb-4">
          A Modern Exodus
        </h1>
        <p className="text-stone-500 text-lg">By Austin Morrow</p>
        <p className="text-stone-400 text-sm mt-6 max-w-2xl leading-relaxed">
          The following is the exposition of something that is both a working theory and prophetic
          assertion that addresses the state of the church and society at large in an attempt to
          delineate where we might fit in as per the order of events recorded in the story of the
          Israelite Exodus out of Egypt.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-16 bg-stone-50 border border-stone-200 p-8">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-6">
          Contents
        </p>
        <ol className="space-y-2 text-sm columns-2">
          {[
            { title: "Preface", id: "preface" },
            { title: "The Lord Remembers", id: "the-lord-remembers" },
            { title: "Assurance and Encouragement", id: "assurance" },
            { title: "Let My People Go", id: "let-my-people-go" },
            { title: "Pharaoh's Hardened Heart", id: "pharaohs-hardened-heart" },
            { title: "A Time for War", id: "a-time-for-war" },
            { title: "The Modern Day Pharaoh", id: "the-modern-day-pharaoh" },
            { title: "Forced Labor", id: "forced-labor" },
            { title: "Money", id: "money" },
            { title: "Purchasing Power", id: "purchasing-power" },
            { title: "Inflation", id: "inflation" },
            { title: "Labor Then; Labor Now", id: "labor-then-labor-now" },
            { title: "Attention", id: "attention" },
            { title: "It Can't Be That Bad", id: "it-cant-be-that-bad" },
            { title: "Bringing It Home", id: "bringing-it-home" },
            { title: "The Lord Sees", id: "the-lord-sees" },
            { title: "The Printing Press", id: "the-printing-press" },
            { title: "Idols and Arks", id: "idols-and-arks" },
            { title: "Connecting the Dots", id: "connecting-the-dots" },
            { title: "Plundering the Egyptians", id: "plundering-the-egyptians" },
            { title: "Providence", id: "providence" },
            { title: "Decisions", id: "decisions" },
            { title: "Building a Dwelling Place", id: "building-a-dwelling-place" },
            { title: "Bitcoin", id: "bitcoin" },
            { title: "Conclusion", id: "conclusion" },
          ].map((section, i) => (
            <li key={section.title} className="flex items-start gap-2">
              <span className="text-stone-300 font-mono text-xs mt-0.5 tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.id ? (
                <a
                  href={`#${section.id}`}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {section.title}
                </a>
              ) : (
                <span className="text-stone-300">{section.title}</span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Paper Body */}
      <div className="prose-custom">

        <Section id="preface" title="Preface">
          <p>
            The following is the exposition of something that is both a working theory and prophetic
            assertion that addresses the state of the church and society at large in an attempt to
            delineate where we might fit in as per the order of events recorded in the story of the
            Israelite Exodus out of Egypt. Though much could be cited and referenced to expound on
            what the Lord is saying, the work here has been intentionally confined to Exodus 1–14 in
            an attempt to keep the message succinct and palatable for the layperson who has not been
            able to tease out the ideas in this paper.
          </p>
          <p>
            The thesis might be qualified by saying that, insofar as it can be reasoned and sensed,
            it reflects the tangible, experiential realities we are all currently facing and offers
            clarity regarding those felt realities stemming from systemic oppression. Though this may
            come off as an idea/prophetic insight fully thought through, it is certainly far from it.
            The Lord intends for this message to be disruptive and orthopraxilly countercultural for
            the church at large, but His delivery is intended to be decisive yet tender. This is a
            strong word loosely held, the point being that, though incomplete, it is open to competing
            interpretations and insights assuming they offer the same feeling of being seen and known
            by a God who is truly concerned about the misery of His people.{" "}
            <em>(Exodus 4:31, more on that later.)</em>
          </p>
          <p>
            Though charged with significant implications, this is not intended to be a comprehensive
            word. The comprehensive word has already been delivered in flesh and found worthy (John
            1:14). This message to the church comes heavy handed with the simple intent to ground all
            of us firmly in the appropriate "time" in which we are currently living. Ecclesiastes
            three makes clear that there is "a time" for everything and a season for every activity
            under the heavens.{" "}
            <em>
              The implicit idea being that if you are squarely in the middle of a distinct season
              while acting as though you are in the complete opposite season, there would be
              significant consequences for incorrectly interpreting "the time."
            </em>{" "}
            The Lord intends for us to see clearly and respond appropriately as His body, and by
            God's grace that is exactly what we will do.
          </p>
        </Section>

        <Section id="the-lord-remembers" title="The Lord Remembers">
          <p>
            The Exodus is the realization of a promise that God made to Abraham (Genesis 15:13–14),
            but there is a triggering event that stirs remembrance in the heart of God, thus
            initiating the promised Exodus:
          </p>
          <Blockquote>
            During that long period, the king of Egypt died. The Israelites groaned in their slavery
            and cried out, and their cry for help because of their slavery went up to God. God heard
            their groaning and he remembered his covenant with Abraham, with Isaac and with Jacob. So
            God looked on the Israelites and was concerned about them. (Exodus 2:23–25)
          </Blockquote>
          <p>
            It is the groaning and "cry for help" regarding their slavery (systemic oppression) that
            brings about the remembrance that ultimately leads to the Israelites' freedom. The
            compassionate and empathetic heart of God towards His people's physical suffering presents
            itself early in the story. The Lord continues to make His motivations clear when He
            initiates with Moses:
          </p>
          <Blockquote>
            The Lord said, "I have indeed seen the misery of my people in Egypt. I have heard them
            crying out because of their slave drivers, and I am concerned about their suffering."
            Exodus 3:7
          </Blockquote>
          <p>
            The message is clear: God sees and God cares. To be specific, God sees the human
            suffering incurred as a direct result of the systemic oppression of the day. The
            "Egyptian oppressors" or "slave drivers" are the enforcing arm of the current totalist
            power, namely Egypt.
          </p>
        </Section>

        <Section id="assurance" title="Assurance and Encouragement">
          <p>
            The Lord had a brief message for the Israelites that he directed Moses to deliver before
            he first spoke with Pharaoh:
          </p>
          <Blockquote>
            "Go, assemble the elders of Israel and say to them, 'The Lord, the God of your
            fathers — the God of Abraham, Isaac and Jacob — appeared to me and said: I have watched
            over you and have seen what has been done to you in Egypt. And I have promised to bring
            you up out of your misery in Egypt into the land of the Canaanites, Hittites, Amorites,
            Perizzites, Hivites and Jebusites — a land flowing with milk and honey.'" Exodus 3:16–17
          </Blockquote>
          <p>
            The Israelites were so moved by the simple reality that the Lord was concerned about them
            and had seen their misery that they bowed down and worshiped Him. Before the Lord even
            began to move on their behalf by confronting the state and demanding their release, the
            Israelites bowed down and worshiped. Given their circumstances, they had an overwhelming
            sense of pragmatic helplessness stemming from the gross imbalance of power that
            empirically favored their oppressors. And yet in the midst of that deeply felt reality of
            powerlessness,{" "}
            <em>
              hope and subsequent worship emerges for no other reason than being seen in the midst of
              their misery.
            </em>
          </p>
        </Section>

        <Section id="let-my-people-go" title='"Let My People Go."'>
          <p>
            The Lord responded to the oppression with a message — but it wasn't a message for the
            Israelites; it was for Pharaoh: "Let my people go." The Lord's response might seem
            obvious given the objective nature of physical enslavement, but what isn't so obvious is
            what the Lord didn't say. He didn't exhort the Israelites to rise up in opposition to
            Egypt, nor did He suggest a partnership with His people in the pursuit of their freedom.
            The Exodus story is distinct in that the Israelites are largely on the sidelines — they
            needed the saving power of God to come and deliver them apart from even the smallest
            thing they might be able to "contribute."
          </p>
          <p>
            Said differently, this is something like moving from "Jesus Christ through the local
            church is the hope of the world" to{" "}
            <em>"Jesus Christ for (on behalf of) the local church is the hope of the world."</em>
          </p>
          <Blockquote>
            'I am the Lord, and I will bring you out from under the yoke of the Egyptians. I will
            free you from being slaves to them, and I will redeem you with an outstretched arm and
            with mighty acts of judgment. I will take you as my own people, and I will be your God.'
            Exodus 6:6–8
          </Blockquote>
          <p>
            Then Moses delivered another word of exhortation — and the Israelite response is telling:
          </p>
          <Blockquote>
            Moses reported this to the Israelites, but they did not listen to him because of their
            discouragement and harsh labor. Exodus 6:9
          </Blockquote>
          <p>
            They did not listen for two reasons: "discouragement" and "harsh labor." Harsh labor
            comes at the expense of real human time and energy — time and energy that they might
            otherwise have used to open their ears and receive the words of encouragement.{" "}
            <em>
              A promise can only be reiterated so many times before systemic oppression renders it
              physically and spiritually unintelligible.
            </em>
          </p>
        </Section>

        <Section id="pharaohs-hardened-heart" title="Pharaoh's Hardened Heart">
          <p>
            Moses appears before Pharaoh several times and ends up having his request denied every
            time due to the hardness of Pharaoh's heart. The Lord told Moses at the very beginning
            that He would harden Pharaoh's heart. That supplemental hardening of Pharaoh's heart
            might be perceived as the Lord's enabling of the Pharaoh to continue on with the true
            motivations of his heart despite the increased severity of the plagues at hand.{" "}
            <em>
              Tyranny is properly understood only once it has been seen doubling down on its
              oppressive nature in the face of divine opposition.
            </em>
          </p>
          <p>
            The Lord has decisively set Himself up against the power that has confined His people. He
            raised up Pharaoh in order to make it abundantly clear that He is powerful and is not shy
            in the display of that power to combat tyrannical control that leads to the enslavement
            of His people. That display of power is not only for Pharaoh but also for "all the earth"
            to see and begin to associate the projection of God's power with what it looks like to
            combat tyranny and become truly free.
          </p>
          <Blockquote>
            "It wasn't enough to bring the Israelites out of Egypt and into the promised land; the
            oppressive system had to be brought down as well."
          </Blockquote>
        </Section>

        <Section id="a-time-for-war" title="A Time for War">
          <p>
            Though the Israelites came up out of Egypt "ready for battle", the Lord elected to lead
            them on a longer road toward the Red Sea in order to avoid any potential war they might
            have encountered in the Philistine country; the Lord said, "If they face war, they might
            change their minds and return to Egypt." Being dressed for war and being truly ready for
            warfare are two completely different things, and the Lord knew that.
          </p>
          <p>
            And therein lies the fundamental presupposition of this work: it is the author's
            conviction that the people of God and the world at large are squarely in the middle of
            the Exodus story as those who are currently living under the active systemic oppression of
            what might be considered the totalist power of the day. The Church is somewhere between
            the initial encouragement of the Lord that brought about a sense of relief followed by
            spontaneous worship (Exodus 4:29–31) and the second encouragement delivered by Moses
            that inevitably fell on deaf ears (Exodus 6:9). There is a time for war and a time for
            peace, and it is imperative that the people of God interpret the times rightly.
          </p>
        </Section>

        <Section id="the-modern-day-pharaoh" title="The Modern Day Pharaoh">
          <p>
            What set the oppression of Pharaoh apart from every other issue the Israelites were
            facing is that every other issue was subordinate to the thing that was stealing their
            very personhood. The "groaning" that goes up to God is the byproduct of a collective
            experience that manifested in a unified response. They were all primarily, apparently
            solely, concerned with one thing: enslavement. There is, at times, one particular thing,{" "}
            <em>the predominant evil of the hour</em>, that so invades the very core of their
            existence that they will collectively and even unknowingly unite in a common groan that
            catches the Lord's attention.
          </p>
          <p>
            An even more pernicious form of systemic oppression would be one that could achieve the
            same result of mass enslavement apart from that which makes it obvious and therefore
            recognizable to the average person. The hypothesized oppression would still be able to
            enact a physical toll on the oppressed, but its effects would be subversive, subtle,
            cumulative, and shrouded in mystery in order to disguise the enslavement. What the author
            will attempt to make clear in this work is that this is the exact form of systemic
            oppression taking place today. Though the evil is veiled in mystery, nuanced in
            execution, and ever evolving to stay effective and hidden, "the Lord sees."
          </p>
        </Section>

        <Section id="forced-labor" title="Forced Labor">
          <p>
            The Exodus enslavement is in reference to forced labor required of the Israelites in the
            production of bricks for the building of "store cities" for Pharaoh (Exodus 1:12). The
            essence of the exchange is that of the Israelites having their personal time and energy
            taken from them and transformed into bricks that are then used to build something they
            had no say in and will not benefit from.
          </p>
          <p>
            Time and energy is the essence of our physical lives. This reality applies to everyone
            regardless of their beliefs. The subconscious reasoning behind slavery being so
            bothersome to the Lord in the Exodus story is because it is the theft of the very life of
            His people unto the empowerment of tyranny and oppression. The Pharaoh is literally
            empowered in the sense that he is receiving the end result of the work that the Israelites
            generated in their enslaved existence.
          </p>
        </Section>

        <Section id="money" title="Money">
          <p>
            Before a parallel can be made between the canonical Exodus story and the "Modern Exodus,"
            the reader must first have an understanding of money grounded in first principles. Money
            is the encapsulation of human time and energy. One might think of money as a battery in
            which we preserve our previously expended time and energy. If a day laborer working for a
            commercial roofing company deploys 10 hours of his time to construct a roof, then the
            monetary compensation they receive at the end of the day is the encapsulation of 10 hours
            of their life (time) plus the physical work they exerted in the construction process
            (energy).
          </p>
          <p>
            Money is the encapsulation of your previous life lived. Money is consequential because it
            is the embodiment of our physical lifeblood. The word "economy" can be traced back to the
            Greek word <em>oikonomia</em> — <em>oikos</em> (household) and <em>nemein</em>{" "}
            (management). The word "economy" is more accurately considered "household management,"
            and there is arguably nothing more intimate or consequential than the management of the
            household.
          </p>
        </Section>

        <Section id="purchasing-power" title="Purchasing Power">
          <p>
            "Purchasing power" is the standard vernacular used when considering the quantifiable
            power of money — defined as the measure of how many goods or services you can buy with a
            unit of currency. Assuming the purchasing power of a currency remains constant over time,
            then the time and energy initially deposited into the currency would retain its power in
            perpetuity.
          </p>
          <p>
            If the money in which someone holds their life's energy were to experience a loss of
            purchasing power, then it's reasonable to conclude that that power was not destroyed but,
            rather, taken. In the most fundamental sense, we're considering the preservation of human
            life; the preservation of the power of human life.
          </p>
        </Section>

        <Section id="inflation" title="Inflation">
          <p>
            The United States dollar has lost about 97% of its purchasing power since the founding of
            the central bank in 1913. That means that 97% of the human time and energy deposited in
            1913 was taken from those who made the initial deposit.
          </p>
          <FigureImage
            src="/paper/img-004.png"
            alt="A Dollar's Worth: Purchasing Power of the U.S. Dollar"
            caption="A Dollar's Worth — Purchasing Power of the U.S. Dollar"
          />
          <p>
            Inflation occurs primarily through monetary expansion and credit creation. The logical
            question: where does the power of newly created money come from? Consider a swimming pool
            full of water. The size of the pool reflects the size of the money supply; the water
            inside represents the energy that the money supply collectively possesses. Doubling the
            square footage of the pool is the same as expanding the money supply by 100%. Assuming
            the pool was full initially, the pool at the end of the expansion would only be 50% full
            of water across the whole pool. There was no water added — you cannot increase the energy
            artificially.
          </p>
          <p>
            The answer: the power that newly created money receives comes at the expense of the money
            that is already in circulation. The water (monetary energy) already in the pool was
            diluted. That pool of water might be considered the very lives of the people who store
            their lifeblood in the pool.{" "}
            <em>The expansion of the money supply came at the dilution of real human life.</em>
          </p>
        </Section>

        <Section id="labor-then-labor-now" title="Labor Then; Labor Now">
          <p>
            Pharaoh makes it clear from the beginning that his primary motivation for not permitting
            the Israelites to leave is the continued extraction of Israelite labor. By the same token,
            central banks receive the same benefit through increasing the money supply. When money is
            created, it receives its power by siphoning a little bit of power from every other unit of
            currency that was already in circulation.{" "}
            <em>
              On a first principles basis, there's no difference between the loss of time and energy
              that the Israelites experienced in their enslaved existence and the loss of time and
              energy that the average person experiences today via inflation.
            </em>
          </p>
          <p>
            There was a decisive inflection point around 1971 where the correlation between worker
            productivity and compensation was broken — and permanently so. From 1971 onward, hourly
            compensation has remained flat while production has continued its trend up and to the
            right. 1971 was the year the United States defaulted on its global monetary obligations
            by depegging the dollar from a gold standard. After the gold standard was dropped there
            was nothing left to constrain the creation of new money by central banks.
          </p>
          <FigureImage
            src="/paper/img-003.png"
            alt="Workers produced much more, but typical workers' pay lagged far behind"
            caption="Workers produced much more, but typical workers' pay lagged far behind (1948–2013)"
          />
        </Section>

        <Section id="attention" title="Attention">
          <p>
            The second order effect of enslavement is the loss of the slaves' ability to pay
            attention. Pharaoh understood this:
          </p>
          <Blockquote>
            "Make the work harder for the people so that they keep working and pay no attention to
            lies." Exodus 5:6–9 (author's emphasis)
          </Blockquote>
          <p>
            The "lies" Pharaoh was referring to was the message of freedom that God gave to Moses and
            Aaron to deliver to the Israelites. What a tyrant calls "lies" is typically double-speak
            for what is in all actuality the truth of the matter. The insidious reality is that
            oppressors can extract so much time and energy from their slaves that the slaves have no
            time or energy left over to pay attention. If a worker today is having to expend more and
            more time and energy just to make ends meet due to the predatory effects of inflation,
            when are they supposed to find time to pay attention?{" "}
            <em>
              In reality, there are only so many hours in a day to work, and people can only cut so
              much until there's nothing left to cut.
            </em>
          </p>
        </Section>

        <Section id="it-cant-be-that-bad" title="It Can't Be That Bad">
          <p>
            A common objection to drawing a parallel between the condition of the Israelites enslaved
            existence in Egypt to the condition of, lets say, a modern day blue collar worker living
            in the United States might be that the loss of time and energy is nowhere near comparable
            between the two. An objective presentation of the data will leave the reader free to draw
            their own conclusions. The intent of this work is not to be overly technical and nuanced
            as it pertains to the metrics, mechanics, and idiosyncrasies of the modern day monetary
            system, but rather provide just enough of a high-level overview for the reader to be able
            to make sense of the systemic monetary (read: life) oppression that is intentionally
            shrouded in mystery. With that said, the data presented in this work is an attempt to
            most appropriately synthesize multiple data points from several sources into a digestible
            form.
          </p>
          <p>
            The data that is commonly referenced when it concerns the measure (or rate) of inflation
            is called the Consumer Price Index (CPI). Though this index is utterly flawed by any
            metric, this is the standard and, for the sake of brevity and simplicity, the following
            assessments in this section will reference the CPI without qualification. If people ask
            what the rate of inflation is or if someone is making a news announcement in reference to
            rising or falling inflation, this is the number referenced. The chart below depicts how
            the information is typically presented.
          </p>
          <FigureImage
            src="/paper/img-000.png"
            alt="Consumer Price Index for All Urban Consumers: All Items in U.S. City Average"
            caption="Consumer Price Index for All Urban Consumers: All Items in U.S. City Average"
          />
          <p>
            At the time of writing, US Consumer Price Index YoY is at 3.67%, compared to 3.18% last
            month. Without knowing what the data is saying, 3.67% might seem inconsequential, but
            it's important to recognize that this is a year over year (YoY) metric. The US Inflation
            Rate is the percentage which a chosen basket of goods and services purchased in the US
            increases in price over a year. Meaning, at the time of writing, the goods and services
            in the measured basket of goods are, on average, 3.67% more expensive than they were 12
            months ago. That number may still appear small, but what is not taken into account here
            is the compounding effect of inflation over time.
          </p>
          <p>
            Compounding interest is something people reading this are likely to be more familiar
            with. Compound interest is calculated based on the principal amount initially invested
            plus the accumulated interest of previous periods, and thus can be regarded as "interest
            you earn on interest." The same idea works in the opposite direction for compounding
            inflation. The YoY rate of inflation is currently 3.67%, but the chart above isn't
            telling the whole story. There is 3.67% more inflation today than there was a year ago,
            but there was inflation last year too, and the year before that, and the year before
            that, and so on. The idea is that inflation is compounding exponentially, meaning that it
            builds on itself over time at an increasingly rapid rate. The central bank targeting a 2%
            inflation rate might appear unassuming, but targeting a 2% rate of inflation every year
            for 50 years has significant compounding effects. Inflation is more accurately presented
            over a longer time horizon to provide the proper perspective.
          </p>
          <FigureImage
            src="/paper/img-001.png"
            alt="Cumulative Inflation 1913 - 2022"
            caption="Cumulative Inflation 1913 – 2022"
          />
        </Section>

        <Section id="bringing-it-home" title="Bringing It Home">
          <p>
            The synopsis:{" "}
            <em>
              inflation is the theft of real human life, and that theft has been far from
              inconsequential over time.
            </em>{" "}
            The money supply, according to M2, grew from 2019 to 2021 by 35% — meaning that 35% of
            all dollars in circulation today were printed in two years. In those two years alone,
            everyone holding US dollars was diluted by 35%. Their accumulated "life's savings"
            (intended literally here) was diluted (read: stolen) by 35% of the whole.
          </p>
          <FigureImage
            src="/paper/img-002.png"
            alt="M2 Money Supply"
            caption="M2 Money Supply (FRED)"
          />
          <p>
            The nature of the dilution being subtle and ubiquitous makes it very difficult to object
            to or even become aware of. The idea harkens to the boiling frog syndrome. If a frog is
            suddenly put into a pot of boiling water, it will jump out. But if the frog is put in
            lukewarm water, with the temperature rising slowly, it will not perceive any danger to
            itself and will be slowly cooked to death. Boiling water is obvious in the same sense
            that physical enslavement is obvious. The frog left in the lukewarm water does not have
            clarity regarding its circumstances until it's too late, though the felt reality of the
            slow death is felt all the way through.
          </p>
        </Section>

        <Section id="the-lord-sees" title="The Lord Sees">
          <p>
            Before this work can progress into something that might resemble an "action point," an
            important point needs to be made clear. The canonical Exodus story is of the saving power
            of God enacted against tyrannical oppression that enslaved His people. That saving was
            brought about entirely by the arm of the Lord who delivered His people apart from any
            Israelite contribution. If the word articulated in this work accomplishes anything, let it
            be the realization of dignity it provides the reader in being able to, like the Israelites,
            "groan" and "cry out" to the Lord with clarity regarding their felt systemic oppression.
          </p>
          <Blockquote>
            "And now the cry of the Israelites has reached me, and{" "}
            <em>I have seen</em> the way the Egyptians are oppressing them." Exodus 3:9
          </Blockquote>
          <p>
            Outside of whether or not those who are being oppressed understand the fundamentals of
            their oppression, the Lord sees. The idea is that the Lord sees even, and maybe even{" "}
            <em>especially</em>, when those who are being oppressed do not. Though intentionally
            shrouded in mystery and ambiguity, the Lord is not confused concerning the totalitarian,
            systemic oppression of the hour.
          </p>
        </Section>

        <Section id="the-printing-press" title="The Printing Press">
          <p>
            The 16th century Protestant Reformation was a significant inflection point that had
            profound social, political, and cultural implications across Europe. The printing press,
            invented by Johannes Gutenberg in the 15th century, proved crucial. With it, Martin
            Luther's 95 Theses was able to be reproduced and distributed far more efficiently among
            the public.{" "}
            <em>The printing press essentially democratized information</em>, empowering individuals
            with access to diverse perspectives and contributing significantly to the Protestant
            Reformation.
          </p>
          <p>
            To drive the point home: no printing press means no Protestant Reformation. The very
            essence of Christianity would not be what it is today if it were not for the invention of
            the printing press. In the era preceding the Protestant Reformation, the very Word of God
            had been captured by the Catholic Church due to the "centralized" nature of scriptural
            doctrine at the time. The foundational and formative underpinning of the Church today is
            the direct result of the Lord unleashing the revelation of His Word on the rails of human
            innovation.
          </p>
        </Section>

        <Section id="idols-and-arks" title="Idols and Arks">
          <p>
            The gold that the Israelites plundered from the Egyptians on their way out of Egypt was
            used to make both the ark of the covenant (Exodus 25:11–13) <em>and</em> the golden calf
            (Exodus 32:4). The substance can be set apart, but if you make an idol out of it then it
            becomes a detriment to both the craftsman and those who rely upon it.
          </p>
          <p>
            The "gold" (money) becomes an idol if it is transformed into a false god — a place in
            which faith is deposited outside of God. The "gold" (money) becomes an ark if it is used
            to uphold that which is of the highest order. "Gold" (money) has the potential to become
            either an ark or an idol; it boils down to how the gold (money) is used.{" "}
            <em>
              It simply is what it is, therefore the most significant thing about it is what is done
              with it.
            </em>
          </p>
        </Section>

        <Section id="connecting-the-dots" title="Connecting the Dots">
          <p>
            If an entire nation, or global population, were subjected to the tyrannical siphoning of
            their very life via the inflation of their money (life), then it would be appropriate to
            consider that nation or global population as living in the midst of a tyranny that's
            slowly consuming them.{" "}
            <em>
              We all live "in Egypt" as those who experience daily, and certainly cumulatively over
              time, the real effects of the theft of our very lives.
            </em>
          </p>
          <p>
            If this presupposition holds true, then "crossing the Red Sea" would look like moving
            from a place where the collective life of the people (the money) is no longer stolen via
            inflation into a "land" where the value (power) of the money is preserved over time.
            Inflation is a feature of the current global monetary system, not a bug. Therefore, in
            order to rid the world of inflationary tyranny, the entire monetary system as we know it
            today will have to be dispensed with.{" "}
            <em>Freedom from</em> precedes <em>freedom to.</em>
          </p>
        </Section>

        <Section id="plundering-the-egyptians" title="Plundering the Egyptians">
          <p>
            The Israelites moved from a jurisdiction predicated on slavery to a completely new
            jurisdiction where they were free. They moved from Egypt <em>into the desert</em> where
            they had to then work out their new found "freedom" for 40 years until they were ready to
            move into the promised land. Dispensing with tyranny today will not directly lead into the
            "promised land" tomorrow. We must first concern ourselves with <em>freedom from</em>{" "}
            tyranny so that we might thereafter consider what we have the <em>freedom to</em> do.
          </p>
          <Blockquote>
            "And I will make the Egyptians favorably disposed toward this people, so that when you
            leave you will not go empty-handed... And so you will plunder the Egyptians." Exodus
            3:21–22
          </Blockquote>
          <p>
            The "plundering of the Egyptians" was literally a transfer of energy from one regime to
            another that was actively facilitated by the Lord. The transfer having been conducted in
            gold was no coincidence. Gold is a representation of "neutral", pure and untarnishable
            potential. The gold is indicative of pure energy; in a sense, God is literally empowering
            the Israelites with the potential to be.
          </p>
        </Section>

        <Section id="providence" title="Providence">
          <p>
            The canonical Exodus story leads with the recurring and overwhelming display of
            providence that then leads to the receiving of the gold on their way out of Egypt. The
            saving, providential power of God is undeniable in how it manifested itself in the
            display of decisive and mighty plagues. Moreover, the Bible makes it clear that the
            display of the first three plagues affected the Israelites as well as the Egyptians. The
            Israelites were subjected to the first three plagues but shielded from the rest; which
            communicates that there's something inescapable about providence and reckoning even for
            the oppressed. There's a measure of inescapable providence simply due to proximity,
            namely proximity to the tyrannical oppressors. The overarching principle is something
            like: though His people are oppressed, the Lord has them experience an appropriate
            measure of the judgment collectively, alongside their oppressors, to bring about a
            shared experiential solidification of conviction in the Lord's seriousness concerning
            His judgements. He apportions the appropriate amount of universal judgment commensurate
            with what His people need as an inoculation of sorts, but He shields them from the brunt
            of it. By carefully "injecting" a measure of the consequences (the plagues) of the evil
            of the Egyptians into His people, He hopes to inoculate them against the evil of
            tyranny; "In wrath (He) remembers mercy."
          </p>
          <p>
            The mysterious nature of providence alone combined with peculiarities in how it is
            experienced personally leaves room for its entrance into the story of the Modern Exodus.
            As per the Exodus story, the providential hand of God slowly destabilized the order of
            systemic oppression in Egypt. With consensus concerning the modern felt reality being
            something akin to an overall societal destabilization, it's worth considering whether or
            not a portion of that destabilization might be rightly attributed to the providential
            hand of God. The Lord has the ability to exercise discretion and selectivity when
            exercising His sovereign judgment, and therefore could very well be in the middle of
            exercising His judgment even now in opposition to the tyrannical oppression of the hour.
            The significance in proposing that the unraveling might be the Lord's doing is that it
            further supports the notion that we may very well be in the middle of a Modern Exodus.
            This isn't intended to write off the direct consequences of sin or the principle of
            sowing and reaping, it is simply to add an additional avenue of possibility concerning
            the unraveling we're experiencing. The reality of things is likely a differentiated
            mixture of a multiplicity of contributing factors, but chief among them may very well be
            His hand in direct response to tyranny.
          </p>
        </Section>

        <Section id="decisions" title="Decisions">
          <p>
            As deciphered from the text, the story of the Exodus is one where the Israelites found
            themselves enslaved and powerless, consequently needing the saving power of God to
            deliver them apart from even the smallest thing they might be able to obey and thus
            "contribute." With that said, there are two things that the Israelites do in Egypt
            during the Exodus that have a significant impact on their rescuing. The first was the
            decision of whether or not to put the blood of the lamb on their doorposts in order to
            survive the final plague, and the second was the decision of whether or not to ask the
            Egyptians for gold as they made their way out of Egypt. Both decisions would have had
            significant consequences had the Israelites made the wrong decision.
          </p>
          <p>
            In a tyranny, you have to differentiate yourself lest you intentionally or
            unintentionally become consumed by the nature of that system, the nature of the "gods of
            Egypt" (Exodus 12:12). There's a sense in which you can't make that distinction on your
            own accord. That's why you can't put your own blood on the doorpost, it requires
            something higher and outside of yourself to serve as a sacrifice sufficient to cover
            that part of you that has been infected by "the gods of Egypt". The message behind the
            blood on the doorpost in Exodus is: "make the proper sacrifice or the impropriety of
            your own life will have to stand on its own accord, and thus be consumed". The blood on
            the doorpost is put there in faith, not necessarily out of any real understanding of the
            sufficiency of the sacrifice being made. In the act of placing the blood on the
            doorposts, the Israelites communicated that they were set apart because they had chosen
            to willingly subjugate themselves to a sacrifice that was higher than themselves. The
            fundamental Egyptian principle at the time was predicated on a hierarchy that placed
            Pharaoh as the ultimate authority, whereas the Israelites made a decision to willingly
            come under the authority of the Lord.
          </p>
          <p>
            The blood on the doorposts was step one in the final process of the Israelites making
            their way out of Egypt, step two was deciding to ask for the Egyptian gold as they were
            leaving Egypt. It's easy to write off the significance of step two, as the consequences
            of getting step one wrong seem to significantly overshadow the implications behind
            simply leaving Egypt "empty-handed". There's a decisive finality in the last plague
            that's embodied in the literal death of the firstborn across all of Egypt. If you get
            step one wrong, you die, but if you get step two wrong then you soon find yourself "in
            the desert" without the materials necessary to participate in covenantal union with the
            Lord. In order to "move into the desert" and be successful you have to first receive the
            gold, and you receive the gold by having the humility to ask for it on your way out of
            the tyranny. The key is being humble enough to ask for the gold on the way out. You
            don't want to be in a position where the Lord asks you to build an ark, but you don't
            have the gold to do so.
          </p>
        </Section>

        <Section id="building-a-dwelling-place" title="Building a Dwelling Place">
          <p>
            Today, the Lord's presence is not contained in arks or tabernacles, but rather "dwelling
            in our hearts through faith" (Ephesians 3:16). Though the "building material" of that
            which hosts the Lord's presence has changed from gold and acacia wood to flesh and bone,
            the physical nature of His habitation remains the same. If there is anything sacred,
            it's the place where the Lord resides. This reality was so tangible in the old testament
            that you would immediately be struck down for so much as laying a hand on the ark of the
            covenant. In the same way that tampering with the arc of the covenant came with
            consequences, so too does manipulating the modern rendition of the Lord's encampment,
            the human body (1 Corinthians 6:19). If that holds true, then it's worth considering
            what might be considered a "sin against the body." Money is the essence of physical life
            in that it is fundamentally human time and energy. With that said, the manipulation or
            dilution of the money is akin to tampering with the ark, there is no more egregious sin.
          </p>
          <p>
            Similar to how the gold served as the material used to build the ark of the covenant,
            money serves as that same "physical material" today with which we have the opportunity
            to build a modern dwelling place for the Lord. Unbeknownst to the Israelites, they
            received the gold as something of a reconciliation for all the time and energy lost
            while enslaved in Egypt. They cast both an ark and an idol out of that same gold, and
            that's precisely what made the magnitude of the subsequent glory and sin respectively so
            great; they created those things out of their very being. They gave themselves over to
            each of those things in the most intimate way possible by using the gold that was
            fundamentally the personification of their very lives. Moses understood this idea.
            That's why he had the Israelites literally drink (internalize) the gold of the golden
            calf:
          </p>
          <Blockquote>
            When Moses approached the camp and saw the calf and the dancing, his anger burned and he
            threw the tablets out of his hands, breaking them to pieces at the foot of the mountain.
            And he took the calf the people had made and burned it in the fire; then he ground it to
            powder, scattered it on the water and made the Israelites drink it. Exodus 32:19–20
          </Blockquote>
          <p>
            Moses made them drink the gold because he wanted to drive the point home: the gold was
            literally the personification of their very life. The forced drinking of the gold was
            actually the mercy of Moses offering the Israelites a second chance. As the Lord's
            prophet, "in wrath (he) remembers mercy". Drinking the gold served as a physical
            reminder that the gold was a derivative (in the financial sense of the word) of their
            very life, and thus should be considered as sacred as life itself. They internalized the
            gold with the implication that it would be "digested" and then come out imbued with life
            anew as though it were being derived from their bodies for the first time, a second
            chance. The labor of digestion producing the second rendering is illustrative of the
            initial rendering of the gold that came through work/labor (the expenditure of time and
            energy). There is no clearer symbolic representation of money as your life than this.
          </p>
          <p>
            Receiving money on the way out of the Modern Exodus tyranny is the receiving back of
            lifeblood (energy) required to "build an ark" on the other side of the "Red Sea". Among
            all the value in Egypt, gold was the only seemingly Egyptian relic that made it out of
            Egypt, but that isn't exactly correct. The only thing that made it out of Egypt was the
            Israelites themselves (past, present, and future). It's the combination of their past
            (past life, the gold) with their present life (the Exodus) that allows them to realize
            their future life (the Promised Land). The "Egyptian gold" received in Exodus 12 isn't
            Egyptian at all. When asked for, in a spirit of humility and received in faith, the gold
            becomes the realization of life lost in the hands of the Israelites. By asking for it on
            the way out, there's a sense in which an oppressed person receives their life back in a
            spirit of both humility and dignity.
          </p>
          <FigureImage
            src="/paper/img-005.png"
            alt="Cumulative Inflation 1913 - 2022"
            caption="Cumulative Inflation 1913 – 2022"
          />
        </Section>

        <Section id="bitcoin" title="Bitcoin">
          <p>
            Similar to how the Church served as a major patron and custodian of knowledge prior to
            the invention of the printing press, central banks and federal authorities now stand in
            the same position as the creators and maintainers ("gatekeepers") of money (life). The
            monopoly used to be on information, but now the monopoly is on all value (or all life
            itself).
          </p>
          <p>
            Insofar as technology permits, Bitcoin is the latest iteration of money that most
            accurately reflects the principle of decentralized creation and maintenance. The truly
            decentralized nature of Bitcoin is what sets it apart as that which has the potential to
            stand up a new economic system predicated on total freedom.{" "}
            <em>If gold is the most noble metal, then Bitcoin is the most noble money.</em> To date,
            it serves as the best iteration of neutral potentiality that ideal money ultimately
            embodies.
          </p>
          <p>
            Bitcoin is the modern iteration of the "uninscribed gold" that the Israelites received on
            their way out of Egypt. Though Bitcoin is seemingly predicated on certain ethics and
            economic principles, at its core it is nothing more than math and code being run on
            hardware. The math and code are similar to the unique particularities characterized by
            gold on an elemental level.
          </p>
          <p>
            This is not a work intended to highlight the technological superiority of Bitcoin. This
            work is explicitly concerned with that which brings the oppressed out of Egypt and into
            the imbued freedom found on the "other side of the Red Sea." This is a work primarily
            focused on the Heart of God that sees and cares about the condition of the oppressed and
            is actively moving on behalf of those who are powerless in and of themselves to bring
            about change.
          </p>
        </Section>

        <Section id="conclusion" title="Conclusion">
          <p>
            The tyranny we find ourselves in today is the product of being forced to deal in money
            that has been inscribed for us. The money we hold — the very thing in which we all store
            our very life — is entirely subject to the will and desire of an authority we didn't
            choose. There is a very real portion of everyone's life this year that will be taken from
            them and reallocated as the inscriptions dictate.{" "}
            <em>
              Whether the life is stolen via an executive order from Pharaoh or an executive order
              from the Fed Chair, the end result is the same: real people lose their lives while
              building storehouses for their oppressors.
            </em>
          </p>
          <p>
            The hope to draw from this word is that the Lord sees and the Lord cares about the plight
            of the oppressed. The secondary hope this work offers is that He is moving on behalf of
            His people even now. The inspiration for this word stems from a felt reality that the Lord
            is indeed making a way for His people out of Egypt by directly confronting the specific
            overarching tyranny of the hour.
          </p>
          <p>
            The first invitation into freedom manifests in the suggestion that blood be placed over
            the doorpost — an exhortation that should not be taken lightly. The second invitation is
            to ask for the gold on the way out of Egypt. You don't want to be in a position where the
            Lord asks you to build an ark, but you don't have the gold to do so.
          </p>
          <p>
            You yourself are God's temple, and anyone (<em>or any system</em>) that aims to destroy
            God's temple will be destroyed by God. The Lord takes the preservation of His temple very
            seriously — so if Bitcoin purports to serve as a modern rendition of the building material
            that best preserves the temple, then that's something worth asking about.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return <blockquote>{children}</blockquote>;
}

function FigureImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="w-full h-auto border border-stone-200"
      />
      {caption && (
        <figcaption className="text-xs text-stone-500 mt-3 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
