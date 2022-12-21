'use strict';

// ***** GLOBALS *****

let preWord = 'abed,abet,able,ably,abut,acai,aced,aces,ache,achy,acid,acme,acne,acre,acts,adds,adit,adze,aeon,afar,afro,agar,aged,ages,agog,ague,ahem,aide,aids,ails,aims,airs,airy,ajar,akin,alar,alas,ales,alga,ally,alms,aloe,also,alto,alum,ambo,amen,amid,ammo,amok,amps,amyl,ands,anew,ankh,anna,anon,anti,ants,apes,apex,apps,apse,aqua,arch,arcs,area,aria,arid,aril,arks,arms,army,arse,arts,arty,arum,aryl,ashy,asks,atom,atop,aunt,aura,auto,aver,avid,avow,away,awed,awes,awls,awry,axed,axel,axes,axil,axis,axle,axon,baba,babe,baby,bach,back,bade,bads,bags,baht,bail,bait,bake,bald,bale,balk,ball,balm,band,bane,bang,bank,bans,barb,bard,bare,barf,bark,barn,bars,base,bash,bask,bass,bast,bath,bats,batt,baud,bawl,bays,bead,beak,beam,bean,bear,beat,beau,beck,beds,beef,been,beep,beer,bees,beet,begs,bell,belt,bend,bent,berg,berm,best,beta,bets,bevy,beys,bias,bibb,bibs,bide,bids,bier,biff,bike,bile,bilk,bill,bind,bint,bios,bird,bite,bits,blab,blah,bleb,bled,blew,blip,blob,bloc,blog,blot,blow,blue,blur,boar,boas,boat,bobs,bode,bods,body,bogs,bogy,boil,bola,bold,bole,boll,bolo,bolt,bomb,bond,bone,bong,bonk,bony,boob,book,boom,boon,boor,boos,boot,bore,born,boss,both,bots,bout,bowl,bows,boxy,boyo,boys,bozo,brad,brag,bran,bras,brat,bray,bred,brew,brie,brig,brim,brio,bris,brit,bros,brow,buck,buds,buff,bugs,bulb,bulk,bull,bump,bums,bund,bung,bunk,buns,bunt,buoy,burb,burg,burl,burn,burp,burr,bury,bush,busk,buss,bust,busy,butt,buys,buzz,byes,byre,byte,cabs,cads,cafe,caff,cage,cake,calf,call,calm,came,cami,camo,camp,cams,cane,cans,cape,capo,caps,carb,card,care,carp,carr,cars,cart,case,cash,cask,cast,cats,caul,cava,cave,cavy,caws,cays,cede,cell,cels,celt,cent,cess,chad,chai,chap,char,chat,chef,chew,chic,chin,chip,chit,chop,chow,chub,chug,chum,ciao,cite,city,clad,clam,clan,clap,claw,clay,clef,clip,clod,clog,clop,clot,club,clue,coal,coat,coax,cobs,coca,cock,coco,coda,code,cods,coed,cogs,coho,coif,coil,coin,coir,coke,cola,cold,cole,colt,coma,comb,come,comp,cone,conk,conn,cons,cook,cool,coop,coos,coot,cope,cops,copy,cord,core,cork,corm,corn,cosh,cost,cosy,cote,cots,coup,cove,cowl,cows,cozy,crab,crag,cram,crap,craw,crew,crib,crit,croc,crop,crow,crud,crus,crux,cube,cubs,cuds,cued,cues,cuff,cull,culm,cult,cups,curb,curd,cure,curl,curs,curt,cusp,cuss,cute,cuts,cyan,cyst,czar,dabs,dace,dada,dado,dads,daft,dais,dale,dame,damn,damp,dams,dank,dare,dark,darn,dart,dash,data,date,daub,dawn,days,daze,dead,deaf,deal,dean,dear,debt,deck,deed,deem,deep,deer,deft,defy,deke,deli,dell,delt,demo,dens,dent,deny,derm,desk,dews,dewy,dhal,dhow,dial,dice,died,dies,diet,digs,dike,dill,dime,dims,dine,ding,dink,dino,dint,dips,dire,dirt,disc,dish,disk,diss,diva,dive,dock,docs,dodo,doer,does,doff,doge,dogs,dojo,dole,doll,dolt,dome,done,dong,doom,door,dope,dork,dorm,dory,dosa,dose,dote,doth,dots,dour,dove,down,doxy,doze,dozy,drab,drag,dram,draw,dray,drew,drip,drop,drug,drum,drys,dual,dubs,duck,duct,dude,duds,duel,dues,duet,duff,dugs,duke,dull,duly,dumb,dump,dune,dung,dunk,duns,duos,dupe,dura,dusk,dust,duty,dyad,dyed,dyer,dyes,dyke,each,earl,earn,ears,ease,east,easy,eats,eave,ebbs,echo,ecru,eddy,edge,edgy,edit,eels,eggs,eggy,egos,ekes,elan,elks,ells,elms,else,emic,emir,emit,emmy,emus,ends,envy,eons,epee,epic,eras,ergs,errs,eruv,etas,etch,euro,even,ever,eves,evil,ewer,ewes,exam,exec,exit,exon,expo,eyed,eyes,fabs,face,fact,fade,fado,fads,fail,fain,fair,fake,fall,fame,fang,fans,fare,farm,faro,fart,fast,fate,fats,faun,fava,fave,fawn,faze,fear,feat,feck,feed,feel,fees,feet,fell,felt,fend,fens,fern,fess,fest,feta,fete,feud,fiat,fibs,fief,fife,figs,file,fill,film,filo,find,fine,fink,fins,fire,firm,firs,fish,fist,fits,five,fizz,flab,flag,flak,flam,flan,flap,flat,flaw,flax,flay,flea,fled,flee,flew,flex,flip,flit,floc,floe,flog,flop,flow,flub,flue,flus,flux,foal,foam,fobs,foci,foes,fogs,fogy,foil,fold,folk,fond,font,food,fool,foot,fops,ford,fore,fork,form,fort,foul,four,fowl,foxy,frag,frat,fray,free,fret,frig,frog,from,fuel,fugu,full,fume,fund,funk,furl,furs,fury,fuse,fuss,futz,fuzz,gaff,gage,gags,gain,gait,gala,gale,gall,gals,game,gams,gang,gaol,gape,gaps,garb,gash,gasp,gate,gave,gawk,gawp,gays,gaze,gear,geek,gees,gels,gelt,gems,gene,gens,gent,genu,germ,geta,gets,ghat,ghee,gibe,gift,gigs,gild,gill,gilt,gimp,gins,gird,girl,girt,gist,gite,gits,give,glad,glam,glee,glen,glia,glib,glob,glom,glop,glow,glue,glug,glum,glut,gnar,gnat,gnaw,gnus,goad,goal,goat,gobs,goby,gods,goer,goes,gold,golf,gone,gong,good,goof,gook,goon,goop,goos,gore,gory,gosh,goth,gout,gown,goys,grab,grad,gram,gran,gray,gree,grew,grey,grid,grim,grin,grip,grit,grog,grow,grub,grue,guar,guff,gulf,gull,gulp,gums,gunk,guns,guru,gush,gust,guts,guys,gyms,gyre,gyro,hack,haft,hags,hail,hair,hajj,hake,half,hall,halo,halt,hams,hand,hang,hank,haps,hard,hare,hark,harm,harp,hart,hash,hasp,hate,hath,hats,haul,have,hawk,haws,hays,haze,hazy,head,heal,heap,hear,heat,heck,heed,heel,heft,heir,held,hell,helm,helo,help,heme,hemp,hems,hens,herb,herd,here,hero,hers,hewn,hews,hick,hide,hied,high,hike,hill,hilt,hind,hint,hips,hire,hiss,hits,hive,hiya,hoar,hoax,hobo,hock,hoed,hoes,hogs,hold,hole,holo,holt,holy,home,hone,hong,honk,hood,hoof,hook,hoop,hoot,hope,hops,hora,horn,hose,host,hour,hove,howl,hubs,huck,hued,hues,huff,huge,hugs,hula,hulk,hull,hump,hums,hung,hunk,hunt,hurl,hurt,hush,husk,huts,hymn,hype,hypo,ibex,ibis,iced,ices,icky,icon,idea,idle,idly,idol,iffy,ikat,ikon,ills,imam,imps,inch,info,inks,inky,inns,into,ions,iota,iris,irks,iron,isle,isms,itch,item,jabs,jack,jade,jail,jake,jamb,jams,jape,jars,java,jaws,jays,jazz,jean,jeep,jeer,jeez,jefe,jell,jerk,jest,jets,jibe,jibs,jigs,jilt,jink,jinn,jinx,jive,jobs,jock,joey,jogs,john,join,joke,jolt,josh,jots,jowl,joys,judo,judy,jugs,juju,juke,jump,junk,jury,just,jute,juts,kaka,kale,kami,kart,kata,kava,keel,keen,keep,kegs,kelp,kept,kerb,kerf,keto,keys,khan,khat,kick,kids,kill,kiln,kilo,kilt,kind,king,kips,kiss,kite,kith,kits,kiva,kiwi,knee,knew,knit,knob,knot,know,koan,kohl,koji,kola,kook,kora,koto,kudu,labs,lace,lack,lacy,lads,lady,lags,laid,lain,lair,lake,lakh,lama,lamb,lame,lamp,lams,land,lane,laps,lard,lark,lash,lass,last,late,lath,lats,laud,lava,lave,lawn,laws,lays,laze,lazy,lead,leaf,leak,lean,leap,leas,leek,leer,leet,left,legs,leis,lend,lens,lent,less,lest,levy,lewd,leys,liar,libs,lice,lick,lids,lied,lien,lier,lies,lieu,life,lift,like,lilt,lily,lima,limb,lime,limn,limo,limp,line,ling,link,lint,lion,lips,lira,lisp,list,lite,live,load,loaf,loam,loan,lobe,lobs,loch,lock,loco,lode,loft,loge,logo,logs,loin,loll,lone,long,look,loom,loon,loop,loos,loot,lope,lops,lord,lore,lose,loss,lost,loth,lots,loud,lout,love,lows,luau,lube,luck,luff,luge,lugs,lull,lump,lune,lung,lure,lurk,lush,lust,lute,luvs,lynx,lyre,lyse,mace,mach,mack,macs,made,mage,magi,mags,maid,mail,maim,main,make,maki,mako,male,mall,malt,mama,mane,mans,many,maps,mare,mark,marl,mars,mart,masa,mash,mask,mass,mast,mate,math,mats,maul,maws,maxi,maya,mayo,maze,mazy,mead,meal,mean,meat,meek,meet,mega,meld,melt,memo,mend,menu,meow,mere,mesa,mesh,mess,meta,mete,mewl,mews,meze,mica,mice,mics,mids,mien,mike,mild,mile,milk,mill,mime,mina,mind,mine,mini,mink,mint,minx,mire,miry,mise,miso,miss,mist,mite,mitt,moan,moat,mobs,mock,mode,mods,mojo,mola,mold,mole,moll,molt,moms,monk,mono,mood,mook,moon,moor,moos,moot,mope,mops,more,morn,mosh,moss,most,mote,moth,move,mows,much,muck,muds,muff,mugs,mule,mull,mums,mung,muon,murk,muse,mush,musk,muss,must,mute,mutt,myth,naan,nabe,nabs,naff,nags,nail,name,nana,nans,napa,nape,naps,narc,nard,nary,nave,navy,nays,neap,near,neat,neck,need,neem,nene,neon,nerd,ness,nest,nets,news,newt,next,nibs,nice,nick,nigh,nine,nips,nite,nobs,nock,node,nods,noel,noir,nome,none,nook,noon,nope,nori,norm,nose,nosh,nosy,note,noun,nous,nova,nubs,nude,nuke,null,numb,nuns,nuts,oafs,oaks,oaky,oars,oath,oats,obey,obit,oboe,odds,odes,odor,ogee,ogle,ogre,oils,oily,oink,okay,okra,olds,oldy,oleo,olla,omen,omit,once,ones,only,onto,onus,onyx,oops,ooze,oozy,opal,open,opts,opus,oral,orbs,orca,ordo,ores,orgy,oryx,orzo,otic,otto,ouch,ours,oust,outs,ouzo,oval,oven,over,ovum,owed,owes,owls,owns,pace,pack,pact,pads,page,paid,pail,pain,pair,pale,pall,palm,palp,pals,pane,pang,pans,pant,papa,paps,para,pare,park,pars,part,pass,past,pate,path,pats,pave,pawn,paws,pays,peak,peal,pear,peas,peat,peck,pecs,peds,peed,peek,peel,peep,peer,pees,pegs,pelt,pens,pent,peon,pepo,peri,perk,perm,perp,pert,perv,peso,pest,pets,pews,phew,phis,pica,pice,pick,pics,pied,pier,pies,pigs,pika,pike,pile,pill,pimp,pine,ping,pink,pins,pint,pion,pipa,pipe,pish,piss,pita,pith,pits,pity,pixy,plan,plat,play,plea,pleb,pled,plex,plod,plop,plot,plow,ploy,plug,plum,plus,pock,pods,poem,poet,poke,poky,pole,poll,polo,pols,poly,pome,pomp,pond,pone,pong,pony,poof,pool,poop,poor,pope,pops,pore,pork,porn,port,pose,posh,post,posy,pots,pouf,pour,pout,poxy,pram,pray,prep,prey,prez,prig,prim,prob,prod,prof,prog,prom,prop,pros,prow,psis,pubs,puck,puds,puff,pugs,puja,puke,pull,pulp,puma,pump,punk,puns,punt,puny,pupa,pups,pure,puri,purl,purr,push,puss,puts,putt,putz,pyre,pyro,quad,quay,quid,quip,quit,quiz,race,rack,racy,rads,raft,raga,rage,rags,raid,rail,rain,raja,rake,raki,raku,rale,rami,ramp,rams,rang,rank,rant,rape,raps,rapt,rare,rash,rasp,rate,rath,rats,rave,rays,raze,razz,read,real,ream,reap,rear,redo,reed,reef,reek,reel,refs,rein,rely,rems,rend,rent,repo,repp,reps,rest,rete,rhea,ribs,rice,rich,ride,rids,rife,riff,rift,rigs,rile,rill,rime,rims,rind,ring,rink,riot,ripe,rips,rise,risk,rite,ritz,road,roam,roan,roar,robe,robs,rock,rode,rods,roes,roil,role,roll,romp,roms,rood,roof,rook,room,roos,root,rope,ropy,rose,rosy,rota,rote,roti,roto,rots,rout,roux,rove,rows,rube,rubs,ruby,ruck,rude,rued,rues,ruff,rugs,ruin,rule,rump,rums,rune,rung,runs,runt,ruse,rush,rust,ruth,ruts,sack,sacs,safe,saga,sage,sago,sags,said,sail,sake,saki,sale,salt,same,sand,sane,sang,sank,saps,sari,sash,sass,sate,sati,save,sawn,saws,says,scab,scad,scam,scan,scar,scat,scot,scow,scud,scum,seal,seam,sear,seas,seat,sect,seed,seek,seem,seen,seep,seer,sees,self,sell,semi,send,sent,sept,sere,serf,seta,sets,sett,sewn,sews,sexy,shad,shag,shah,sham,shed,shew,shim,shin,ship,shit,shiv,shod,shoe,shoo,shop,shot,show,shul,shun,shut,sibs,sick,side,sift,sigh,sign,sika,silk,sill,silo,silt,sine,sing,sink,sins,sips,sire,sirs,site,sits,size,skeg,skew,skid,skim,skin,skip,skis,skit,skua,slab,slag,slam,slap,slat,slaw,slay,sled,slew,slid,slim,slip,slit,slob,sloe,slog,slop,slot,slow,slug,slum,slur,smog,smug,smut,snag,snap,snip,snit,snob,snog,snot,snow,snub,snug,soak,soap,soar,soba,sobs,soca,sock,soda,sods,sofa,soft,soil,sold,sole,solo,soma,some,song,sons,soon,soot,sops,sora,sore,sort,sots,souk,soul,soup,sour,sown,sows,soya,spam,span,spar,spas,spat,spay,spaz,spec,sped,spew,spin,spit,spot,spry,spud,spun,spur,stab,stag,star,stat,stay,stem,step,stew,stir,stop,stow,stub,stud,stun,stye,subs,such,suck,sued,sues,suet,suit,sulk,sumo,sump,sums,sung,sunk,suns,sups,sura,sure,surf,suss,swab,swag,swam,swan,swap,swat,sway,swig,swim,swum,sync,tabs,tabu,tach,tack,taco,tact,tags,tail,take,talc,tale,talk,tall,tame,tamp,tang,tank,tans,tapa,tape,taps,tare,tarn,taro,tarp,tars,tart,task,taut,taxa,taxi,teak,teal,team,tear,teas,teat,tech,teem,teen,tees,teff,tele,tell,temp,tend,tent,term,tern,test,text,than,that,thaw,thee,them,then,thew,they,thin,this,thou,thro,thru,thud,thug,thus,tian,tick,tics,tide,tidy,tied,tier,ties,tiff,tiki,tile,till,tilt,time,tine,ting,tins,tint,tiny,tipi,tips,tire,toad,toby,toed,toes,toff,tofu,toga,toil,toke,told,tole,toll,tomb,tome,tone,tong,tony,took,tool,toon,toot,topi,topo,tops,torc,tore,torn,torr,tort,tory,toss,tote,tots,tour,tout,town,tows,toys,tram,trap,tray,tree,trek,trey,trig,trim,trio,trip,trod,trot,tsar,tuba,tube,tubs,tuck,tufa,tuff,tuft,tugs,tule,tums,tuna,tune,turd,turf,turk,turn,tush,tusk,tuts,tutu,twee,twig,twin,twit,twos,tyke,type,typo,tyre,tyro,udon,ugly,ulna,umma,umps,undo,unit,unto,updo,upon,urea,urge,uric,urns,used,user,uses,vacs,vail,vain,vale,vamp,vane,vans,vary,vasa,vase,vast,vats,veal,veep,veer,vees,veil,vein,veld,vena,vend,vent,verb,vert,very,vest,veto,vets,vial,vibe,vice,vids,vied,vies,view,vile,vill,vims,vine,vino,viol,visa,vise,vita,viva,void,vole,volt,vote,vows,wack,wade,wadi,wads,waft,wage,wags,waif,wail,wait,wake,wale,wali,walk,wall,wand,wane,wans,want,ward,ware,warm,warn,warp,wars,wart,wary,wash,wasp,wast,watt,wave,wavy,waxy,ways,weak,weal,wean,wear,webs,weds,weed,week,weel,ween,weep,wees,weft,well,went,were,west,what,when,whom,wide,wife,wild,will,wind,wine,wing,wins,wipe,wire,wise,wish,with,woke,wolf,wood,wool,word,wore,work,worm,worn,wrap,yard,yarn,yeah,year,yoga,your,zero,zinc,zone,zoom';
let wordArray = preWord.split(',');
let wordArrayTwo = ['aback', 'abase', 'abate', 'abaya', 'abbey', 'abbot', 'abets', 'abhor', 'abide', 'abode', 'abort', 'about', 'above', 'abuse', 'abuts', 'abyss', 'ached', 'aches', 'acids', 'acing', 'ackee', 'acorn', 'acres', 'acrid', 'acted', 'actin', 'actor', 'acute', 'adage', 'adapt', 'added', 'adder', 'addle', 'adept', 'adieu', 'adios', 'adits', 'adman', 'admin', 'admit', 'adobe', 'adobo', 'adopt', 'adore', 'adorn', 'adult', 'adzes', 'aegis', 'aeons', 'aerie', 'affix', 'afire', 'afoot', 'afore', 'after', 'again', 'agape', 'agate', 'agave', 'agent', 'aggro', 'agile', 'aging', 'aglow', 'agony', 'agora', 'agree', 'ahead', 'ahold', 'aided', 'aider', 'aides', 'ailed', 'aimed', 'aimer', 'aioli', 'aired', 'aisle', 'alarm', 'album', 'alder', 'aleph', 'alert', 'algae', 'algal', 'alias', 'alibi', 'alien', 'align', 'alike', 'alive', 'alkyd', 'alkyl', 'allay', 'alley', 'allot', 'allow', 'alloy', 'allyl', 'aloes', 'aloft', 'aloha', 'alone', 'along', 'aloof', 'aloud', 'alpha', 'altar', 'alter', 'altos', 'alums', 'amass', 'amaze', 'amber', 'ambit', 'amble', 'ambos', 'amend', 'amide', 'amine', 'amino', 'amiss', 'amity', 'amnio', 'among', 'amour', 'amped', 'ample', 'amply', 'amuse', 'ancho', 'angel', 'anger', 'angle', 'angry', 'angst', 'anima', 'anime', 'anion', 'anise', 'ankle', 'annas', 'annex', 'annoy', 'annul', 'anode', 'anole', 'antic', 'antis', 'antsy', 'anvil', 'aorta', 'apace', 'apart', 'aphid', 'apnea', 'apple', 'apply', 'apron', 'apses', 'apter', 'aptly', 'aquas', 'arbor', 'ardor', 'areal', 'areas', 'areca', 'arena', 'argon', 'argot', 'argue', 'argus', 'arias', 'arils', 'arise', 'armed', 'armor', 'aroma', 'arose', 'array', 'arrow', 'arses', 'arson', 'artsy', 'asana', 'ascot', 'ashen', 'ashes', 'aside', 'asked', 'asker', 'askew', 'aspen', 'aspic', 'assay', 'asses', 'asset', 'aster', 'astir', 'asura', 'atlas', 'atman', 'atoll', 'atoms', 'atone', 'atopy', 'attic', 'audio', 'audit', 'auger', 'aught', 'augur', 'aunts', 'aunty', 'aural', 'auras', 'autos', 'auxin', 'avail', 'avers', 'avert', 'avian', 'avoid', 'avows', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke', 'axels', 'axial', 'axils', 'axing', 'axiom', 'axion', 'axles', 'axons', 'azide', 'azole', 'azure', 'babel', 'babes', 'babka', 'backs', 'bacon', 'baddy', 'badge', 'badly', 'bagel', 'baggy', 'bails', 'bairn', 'baits', 'baize', 'baked', 'baker', 'bakes', 'baldy', 'baled', 'baler', 'bales', 'balks', 'balky', 'balls', 'balms', 'balmy', 'balsa', 'banal', 'bands', 'bandy', 'banes', 'bangs', 'banjo', 'banks', 'barbs', 'bards', 'bared', 'barer', 'bares', 'barge', 'barks', 'barmy', 'barns', 'baron', 'barre', 'basal', 'based', 'baser', 'bases', 'basic', 'basil', 'basin', 'basis', 'basks', 'basso', 'bassy', 'baste', 'batch', 'bated', 'bathe', 'baths', 'batik', 'baton', 'batts', 'batty', 'bawdy', 'bawls', 'bayed', 'bayou', 'beach', 'beads', 'beady', 'beaks', 'beams', 'beamy', 'beans', 'beard', 'bears', 'beast', 'beats', 'beaus', 'beaut', 'beaux', 'bebop', 'becks', 'beech', 'beefs', 'beefy', 'beeps', 'beers', 'beery', 'beets', 'befit', 'began', 'beget', 'begin', 'begun', 'beige', 'being', 'belay', 'belch', 'belie', 'belle', 'bells', 'belly', 'below', 'belts', 'bench', 'bends', 'bendy', 'bento', 'bents', 'beret', 'bergs', 'berms', 'berry', 'berth', 'beryl', 'beset', 'bests', 'betas', 'betel', 'betta', 'bevel', 'bezel', 'bhaji', 'bible', 'bicep', 'biddy', 'bided', 'bides', 'bidet', 'bight', 'bigot', 'bijou', 'biked', 'biker', 'bikes', 'biles', 'bilge', 'bills', 'billy', 'bimbo', 'bindi', 'binds', 'binge', 'bingo', 'biome', 'biota', 'bipod', 'birch', 'birds', 'birth', 'bison', 'bitch', 'biter', 'bites', 'bitsy', 'bitty', 'black', 'blade', 'blame', 'bland', 'blank', 'blare', 'blase', 'blast', 'blaze', 'bleak', 'bleat', 'blebs', 'bleed', 'bleep', 'blend', 'bless', 'blimp', 'blind', 'bling', 'blini', 'blink', 'blips', 'bliss', 'blitz', 'bloat', 'blobs', 'block', 'blocs', 'blogs', 'bloke', 'blond', 'blood', 'bloom', 'bloop', 'blots', 'blown', 'blows', 'blued', 'blues', 'bluey', 'bluff', 'blunt', 'blurb', 'blurs', 'blurt', 'blush', 'board', 'boars', 'boast', 'boats', 'bobby', 'bocce', 'boche', 'boded', 'bodes', 'boffo', 'bogey', 'boggy', 'bogie', 'bogus', 'boils', 'bolas', 'boles', 'bolls', 'bolts', 'bolus', 'bombe', 'bombs', 'bonds', 'boned', 'boner', 'bones', 'boney', 'bongo', 'bongs', 'bonks', 'bonny', 'bonus', 'boobs', 'booby', 'booed', 'books', 'booms', 'boomy', 'boons', 'boors', 'boost', 'booth', 'boots', 'booty', 'booze', 'boozy', 'boppy', 'borax', 'bored', 'borer', 'bores', 'boric', 'borne', 'boron', 'bosom', 'boson', 'bossy', 'bosun', 'botch', 'bough', 'boule', 'bound', 'bouts', 'bowed', 'bowel', 'bower', 'bowls', 'boxed', 'boxer', 'boxes', 'boyar', 'boyos', 'bozos', 'brace', 'bract', 'brads', 'brags', 'braid', 'brain', 'brake', 'brand', 'brans', 'brash', 'brass', 'brats', 'brave', 'bravo', 'brawl', 'brawn', 'brays', 'braze', 'bread', 'break', 'bream', 'breed', 'brews', 'briar', 'bribe', 'brick', 'bride', 'brief', 'brier', 'brigs', 'brims', 'brine', 'bring', 'brink', 'briny', 'brisk', 'brits', 'broad', 'broch', 'broil', 'broke', 'brome', 'bronc', 'brood', 'brook', 'broom', 'broth', 'brown', 'brows', 'bruin', 'bruit', 'brunt', 'brush', 'brute', 'bubba', 'bucks', 'buddy', 'budge', 'buffs', 'buggy', 'bugle', 'build', 'built', 'bulbs', 'bulge', 'bulks', 'bulky', 'bulla', 'bulls', 'bully', 'bumps', 'bumpy', 'bunch', 'bunds', 'bundt', 'bunks', 'bunny', 'bunts', 'buoys', 'burbs', 'burgs', 'burka', 'burly', 'burns', 'burnt', 'burps', 'burqa', 'burro', 'burrs', 'bursa', 'burst', 'bused', 'buses', 'bushy', 'busts', 'busty', 'butch', 'butte', 'butts', 'buxom', 'buyer', 'buzzy', 'bylaw', 'byres', 'bytes', 'byway', 'cabal', 'cabby', 'caber', 'cabin', 'cable', 'cacao', 'cache', 'cacti', 'caddy', 'cadet', 'cadre', 'cafes', 'caged', 'cages', 'cagey', 'cairn', 'caked', 'cakes', 'cakey', 'calfs', 'calif', 'calla', 'calls', 'calms', 'calve', 'calyx', 'camel', 'cameo', 'campo', 'camps', 'campy', 'canal', 'candy', 'caned', 'canes', 'canid', 'canna', 'canny', 'canoe', 'canon', 'canto', 'caped', 'caper', 'capes', 'capon', 'capos', 'caput', 'carat', 'carbo', 'carbs', 'cards', 'cared', 'carer', 'cares', 'cargo', 'carob', 'carol', 'carom', 'carps', 'carry', 'carte', 'carts', 'carve', 'cased', 'cases', 'casks', 'caste', 'casts', 'catch', 'cater', 'catty', 'caulk', 'cause', 'caved', 'caver', 'caves', 'cavil', 'cease', 'cecal', 'cecum', 'cedar', 'ceded', 'cedes', 'ceili', 'celeb', 'cello', 'cells', 'celts', 'cents', 'chads', 'chafe', 'chaff', 'chain', 'chair', 'chalk', 'champ', 'chana', 'chant', 'chaos', 'chaps', 'chard', 'charm', 'chars', 'chart', 'chase', 'chasm', 'chats', 'cheap', 'cheat', 'check', 'cheek', 'cheep', 'cheer', 'chefs', 'chemo', 'chert', 'chess', 'chest', 'chews', 'chewy', 'chica', 'chick', 'chico', 'chide', 'chief', 'child', 'chile', 'chili', 'chill', 'chime', 'chimp', 'china', 'chine', 'ching', 'chino', 'chins', 'chips', 'chirp', 'chits', 'chive', 'chock', 'choir', 'choke', 'chomp', 'chops', 'chord', 'chore', 'chose', 'chows', 'chubs', 'chuck', 'chuff', 'chugs', 'chump', 'chums', 'chunk', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'circa', 'cisco', 'cited', 'cites', 'civet', 'civic', 'civil', 'civvy', 'clack', 'clade', 'claim', 'clamp', 'clams', 'clang', 'clank', 'clans', 'claps', 'clash', 'clasp', 'class', 'clave', 'claws', 'clays', 'clean', 'clear', 'cleat', 'clefs', 'cleft', 'clerk', 'click', 'cliff', 'climb', 'clime', 'cline', 'cling', 'clink', 'clips', 'cloak', 'clock', 'clods', 'clogs', 'clomp', 'clone', 'close', 'cloth', 'clots', 'cloud', 'clout', 'clove', 'clown', 'clubs', 'cluck', 'clued', 'clues', 'clump', 'clung', 'clunk', 'coach', 'coals', 'coast', 'coati', 'coats', 'cobia', 'cobra', 'cocci', 'cocks', 'cocky', 'cocoa', 'codas', 'codec', 'coded', 'coder', 'codes', 'codex', 'codon', 'coeds', 'cohos', 'coifs', 'coils', 'coins', 'cokes', 'colas', 'colds', 'coles', 'colic', 'colin', 'colon', 'color', 'colts', 'comas', 'combo', 'combs', 'comer', 'comes', 'comet', 'comfy', 'comic', 'comma', 'commo', 'compo', 'comps', 'comte', 'conch', 'condo', 'coned', 'cones', 'conga', 'congo', 'conic', 'conks', 'cooed', 'cooks', 'cools', 'coops', 'coopt', 'coped', 'copes', 'copra', 'copse', 'coral', 'cords', 'cored', 'corer', 'cores', 'corgi', 'corks', 'corky', 'corms', 'corns', 'cornu', 'corny', 'corps', 'costs', 'cotta', 'couch', 'cough', 'could', 'count', 'coupe', 'coups', 'court', 'coven', 'cover', 'coves', 'covet', 'covey', 'cowed', 'cower', 'cowls', 'coyly', 'crabs', 'crack', 'craft', 'crags', 'cramp', 'crams', 'crane', 'crank', 'crape', 'craps', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craws', 'craze', 'crazy', 'creak', 'cream', 'credo', 'creed', 'creek', 'creel', 'creep', 'creme', 'crepe', 'crept', 'cress', 'crest', 'crews', 'cribs', 'crick', 'cried', 'crier', 'cries', 'crime', 'crimp', 'crisp', 'crits', 'croak', 'crock', 'crocs', 'croft', 'crone', 'crony', 'crook', 'croon', 'crops', 'cross', 'croup', 'crowd', 'crown', 'crows', 'crude', 'cruel', 'cruet', 'crumb', 'cruse', 'crush', 'crust', 'crypt', 'cubby', 'cubed', 'cubes', 'cubic', 'cubit', 'cuddy', 'cuffs', 'culls', 'culpa', 'cults', 'cumin', 'cupid', 'cuppa', 'curbs', 'curds', 'cured', 'cures', 'curia', 'curio', 'curls', 'curly', 'curry', 'curse', 'curve', 'curvy', 'cushy', 'cusps', 'cuter', 'cutie', 'cutis', 'cutup', 'cycad', 'cycle', 'cyclo', 'cynic', 'cysts', 'czars', 'dacha', 'daddy', 'dados', 'daffy', 'daily', 'dairy', 'daisy', 'dales', 'dames', 'damns', 'damps', 'dance', 'dandy', 'dared', 'dares', 'darks', 'darns', 'darts', 'dashi', 'dated', 'dater', 'dates', 'datum', 'daubs', 'daunt', 'davit', 'dawns', 'dazed', 'deals', 'dealt', 'deans', 'dears', 'deary', 'death', 'debit', 'debts', 'debug', 'debut', 'decaf', 'decal', 'decay', 'decks', 'decor', 'decoy', 'decry', 'deeds', 'deems', 'deeps', 'deers', 'defer', 'deify', 'deign', 'deism', 'deist', 'deity', 'dekes', 'delay', 'delft', 'delis', 'dells', 'delta', 'delve', 'demon', 'demos', 'demur', 'denim', 'dense', 'dents', 'depot', 'depth', 'derby', 'desks', 'deter', 'detox', 'deuce', 'devil', 'dewar', 'dhikr', 'dhows', 'dials', 'diary', 'diced', 'dices', 'dicey', 'dicky', 'dicta', 'diets', 'digit', 'diked', 'dikes', 'dills', 'dilly', 'dimer', 'dimes', 'dimly', 'dinar', 'dined', 'diner', 'dines', 'dingo', 'dings', 'dingy', 'dinks', 'dinky', 'dinos', 'diode', 'dippy', 'direr', 'dirge', 'dirty', 'disco', 'discs', 'dishy', 'disks', 'ditch', 'ditsy', 'ditto', 'ditty', 'ditzy', 'divan', 'divas', 'dived', 'diver', 'dives', 'divot', 'divvy', 'dizzy', 'docks', 'dodge', 'dodgy', 'dodos', 'doers', 'doffs', 'doges', 'doggy', 'dogma', 'doing', 'doled', 'doles', 'dolls', 'dolly', 'dolor', 'dolts', 'domed', 'domes', 'donee', 'dongs', 'donna', 'donor', 'donut', 'dooms', 'doomy', 'doors', 'doozy', 'doped', 'dopes', 'dopey', 'dorks', 'dorky', 'dorms', 'dosas', 'dosed', 'doses', 'doted', 'dotes', 'dotty', 'doubt', 'dough', 'doula', 'douse', 'doves', 'dowdy', 'dowel', 'dower', 'downs', 'downy', 'dowry', 'dowse', 'doyen', 'dozed', 'dozen', 'dozer', 'dozes', 'drabs', 'draft', 'drags', 'drain', 'drake', 'drama', 'drams', 'drank', 'drape', 'drawl', 'drawn', 'draws', 'drays', 'dread', 'dream', 'dreck', 'dregs', 'dress', 'dribs', 'dried', 'drier', 'dries', 'drift', 'drill', 'drily', 'drink', 'drips', 'drive', 'droid', 'droll', 'drone', 'drool', 'droop', 'drops', 'dross', 'drove', 'drown', 'drugs', 'druid', 'drums', 'drunk', 'drupe', 'dryad', 'dryer', 'dryly', 'duals', 'ducal', 'ducat', 'duchy', 'ducks', 'ducky', 'ducts', 'dudes', 'duels', 'duets', 'duffs', 'dukes', 'dulls', 'dully', 'dulse', 'dumbo', 'dummy', 'dumps', 'dumpy', 'dunce', 'dunes', 'dunks', 'duomo', 'duped', 'dupes', 'dural', 'durum', 'dusks', 'dusky', 'dusts', 'dusty', 'dutch', 'duvet', 'dwarf', 'dweeb', 'dwell', 'dwelt', 'dyads', 'dyers', 'dying', 'dykes', 'eager', 'eagle', 'eared', 'earls', 'early', 'earns', 'earth', 'eased', 'easel', 'easer', 'eases', 'eaten', 'eater', 'eaves', 'ebbed', 'ebony', 'ebook', 'echos', 'eclat', 'edema', 'edged', 'edger', 'edges', 'edict', 'edify', 'edits', 'eejit', 'eerie', 'egged', 'egret', 'eider', 'eidos', 'eight', 'eject', 'ejido', 'eland', 'elbow', 'elder', 'elect', 'elegy', 'elide', 'elite', 'elope', 'elude', 'elute', 'elven', 'elves', 'email', 'embed', 'ember', 'emcee', 'emery', 'emirs', 'emits', 'emote', 'empty', 'enact', 'ended', 'endow', 'enema', 'enemy', 'enjoy', 'ennui', 'enoki', 'enrol', 'ensue', 'enter', 'entry', 'envoy', 'eosin', 'epics', 'epoch', 'epoxy', 'equal', 'equip', 'erase', 'erect', 'ergot', 'erode', 'erred', 'error', 'erupt', 'essay', 'ether', 'ethic', 'ethos', 'ethyl', 'etude', 'euros', 'evade', 'evens', 'event', 'every', 'evict', 'evils', 'evoke', 'ewers', 'exact', 'exalt', 'exams', 'excel', 'execs', 'exert', 'exile', 'exist', 'exits', 'expat', 'expel', 'expos', 'extol', 'extra', 'exude', 'exult', 'exurb', 'eying', 'eyrie', 'fable', 'faced', 'facer', 'faces', 'facet', 'facia', 'facts', 'faded', 'fader', 'fades', 'faery', 'fails', 'faint', 'fairs', 'fairy', 'faith', 'faked', 'faker', 'fakes', 'fakie', 'fakir', 'falls', 'famed', 'fancy', 'fangs', 'fanny', 'farce', 'fared', 'fares', 'farms', 'farts', 'fasts', 'fatal', 'fated', 'fates', 'fatso', 'fatty', 'fatwa', 'fault', 'fauna', 'fauns', 'favas', 'faves', 'favor', 'fawns', 'faxed', 'faxes', 'fazed', 'fazes', 'fears', 'feast', 'feats', 'fecal', 'feces', 'feeds', 'feels', 'feign', 'feint', 'fella', 'fells', 'felon', 'felts', 'femme', 'femur', 'fence', 'fends', 'feral', 'feria', 'ferns', 'ferny', 'ferry', 'fests', 'fetal', 'fetch', 'feted', 'fetes', 'fetid', 'fetus', 'feuds', 'fever', 'fewer', 'fiats', 'fiber', 'fibre', 'fiche', 'ficus', 'fiefs', 'field', 'fiend', 'fiery', 'fifes', 'fifth', 'fifty', 'fight', 'filch', 'filed', 'filer', 'files', 'filet', 'fills', 'filly', 'films', 'filmy', 'filth', 'final', 'finca', 'finch', 'finds', 'fined', 'finer', 'fines', 'finis', 'finks', 'fiord', 'fired', 'fires', 'firms', 'first', 'fishy', 'fists', 'fitly', 'fiver', 'fives', 'fixed', 'fixer', 'fixes', 'fizzy', 'fjord', 'flack', 'flags', 'flail', 'flair', 'flake', 'flaky', 'flame', 'flank', 'flans', 'flaps', 'flare', 'flash', 'flask', 'flats', 'flaws', 'flays', 'fleas', 'fleck', 'flees', 'fleet', 'flesh', 'flick', 'flier', 'flies', 'fling', 'float', 'flood', 'floor', 'flour', 'flown', 'flows', 'fluid', 'flyer', 'focal', 'focus', 'folks', 'fonts', 'foods', 'force', 'forms', 'forth', 'forty', 'forum', 'found', 'frame', 'fraud', 'fresh', 'fried', 'fries', 'front', 'frost', 'fruit', 'fuels', 'fully', 'funds', 'funny', 'gains', 'games', 'gamma', 'gases', 'gates', 'gauge', 'gears', 'genes', 'genre', 'ghost', 'giant', 'gifts', 'girls', 'given', 'gives', 'gland', 'glass', 'globe', 'glory', 'gloss', 'glove', 'glued', 'goals', 'goats', 'going', 'goods', 'grace', 'grade', 'grain', 'grams', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grass', 'grave', 'great', 'greek', 'green', 'greet', 'grief', 'grill', 'grind', 'grips', 'gross', 'group', 'grove', 'grown', 'grows', 'guard', 'guess', 'guest', 'guide', 'guild', 'guilt', 'habit', 'hairs', 'halls', 'hands', 'handy', 'hangs', 'happy', 'harsh', 'hated', 'hates', 'haven', 'hawks', 'heads', 'heard', 'heart', 'heavy', 'hedge', 'heels', 'hello', 'helps', 'hence', 'herbs', 'highs', 'hills', 'hints', 'hired', 'hobby', 'holds', 'holes', 'holly', 'homes', 'honey', 'honor', 'hooks', 'hoped', 'hopes', 'horns', 'horse', 'hosts', 'hotel', 'hours', 'house', 'hover', 'human', 'humor', 'hurts', 'icons', 'ideal', 'ideas', 'idiot', 'image', 'imply', 'inbox', 'incur', 'index', 'indie', 'inner', 'input', 'intro', 'issue', 'items', 'jeans', 'jelly', 'jewel', 'joins', 'joint', 'jokes', 'judge', 'juice', 'juicy', 'jumps', 'keeps', 'kicks', 'kills', 'kinda', 'kinds', 'kings', 'knees', 'knife', 'knock', 'knots', 'known', 'knows', 'label', 'labor', 'lacks', 'lakes', 'lamps', 'lands', 'lanes', 'large', 'laser', 'lasts', 'later', 'laugh', 'layer', 'leads', 'leaks', 'learn', 'lease', 'least', 'leave', 'legal', 'lemon', 'level', 'lever', 'light', 'liked', 'likes', 'limbs', 'limit', 'lined', 'linen', 'liner', 'lines', 'links', 'lions', 'lists', 'lived', 'liver', 'lives', 'loads', 'loans', 'lobby', 'local', 'locks', 'lodge', 'logic', 'logos', 'looks', 'loops', 'loose', 'lords', 'loses', 'loved', 'lover', 'loves', 'lower', 'loyal', 'lucky', 'lunar', 'lunch', 'lungs', 'lying', 'macro', 'magic', 'major', 'maker', 'makes', 'males', 'maple', 'march', 'marks', 'marry', 'masks', 'match', 'mates', 'maths', 'matte', 'maybe', 'mayor', 'meals', 'means', 'meant', 'meats', 'medal', 'media', 'meets', 'melee', 'menus', 'mercy', 'merge', 'merit', 'merry', 'messy', 'metal', 'meter', 'metro', 'micro', 'midst', 'might', 'miles', 'minds', 'mines', 'minor', 'minus', 'mixed', 'mixer', 'mixes', 'model', 'modem', 'modes', 'moist', 'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'moved', 'moves', 'movie', 'music', 'myths', 'nails', 'naked', 'named', 'names', 'nasal', 'nasty', 'naval', 'needs', 'nerve', 'never', 'newer', 'newly', 'nexus', 'nicer', 'niche', 'night', 'ninja', 'ninth', 'noble', 'nodes', 'noise', 'noisy', 'norms', 'north', 'notch', 'noted', 'notes', 'novel', 'nurse', 'nylon', 'oasis', 'occur', 'ocean', 'offer', 'often', 'older', 'olive', 'omega', 'onion', 'onset', 'opens', 'opera', 'opted', 'optic', 'orbit', 'order', 'organ', 'other', 'ought', 'ounce', 'outer', 'owned', 'owner', 'oxide', 'packs', 'pages', 'pains', 'paint', 'pairs', 'panel', 'panic', 'pants', 'paper', 'parks', 'parts', 'party', 'pasta', 'paste', 'patch', 'paths', 'patio', 'pause', 'peace', 'peach', 'peaks', 'pearl', 'pedal', 'peers', 'penis', 'penny', 'perks', 'pests', 'petty', 'phase', 'phone', 'photo', 'piano', 'picks', 'piece', 'piles', 'pills', 'pilot', 'pinch', 'pipes', 'pitch', 'pixel', 'pizza', 'place', 'plain', 'plane', 'plans', 'plant', 'plate', 'plays', 'plaza', 'plots', 'plugs', 'poems', 'point', 'poker', 'polar', 'poles', 'polls', 'pools', 'porch', 'pores', 'ports', 'posed', 'poses', 'posts', 'pouch', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior', 'prize', 'probe', 'promo', 'prone', 'proof', 'props', 'proud', 'prove', 'proxy', 'psalm', 'pulls', 'pulse', 'pumps', 'punch', 'pupil', 'puppy', 'purse', 'queen', 'query', 'quest', 'queue', 'quick', 'quiet', 'quilt', 'quite', 'quote', 'races', 'racks', 'radar', 'radio', 'rails', 'rainy', 'raise', 'rally', 'ranch', 'range', 'ranks', 'rapid', 'rated', 'rates', 'ratio', 'razor', 'reach', 'react', 'reads', 'ready', 'realm', 'rebel', 'refer', 'reign', 'relax', 'relay', 'renal', 'renew', 'reply', 'reset', 'resin', 'retro', 'rider', 'rides', 'ridge', 'rifle', 'right', 'rigid', 'rings', 'rinse', 'risen', 'rises', 'risks', 'risky', 'rival', 'river', 'roads', 'robot', 'rocks', 'rocky', 'rogue', 'roles', 'rolls', 'roman', 'rooms', 'roots', 'ropes', 'roses', 'rough', 'round', 'route', 'royal', 'rugby', 'ruins', 'ruled', 'ruler', 'rules', 'rural', 'sadly', 'safer', 'salad', 'sales', 'salon', 'sandy', 'satin', 'sauce', 'saved', 'saves', 'scale', 'scalp', 'scans', 'scare', 'scarf', 'scary', 'scene', 'scent', 'scoop', 'scope', 'score', 'scout', 'scrap', 'screw', 'seals', 'seams', 'seats', 'seeds', 'seeks', 'seems', 'sells', 'sends', 'sense', 'serum', 'serve', 'setup', 'seven', 'sewer', 'shade', 'shaft', 'shake', 'shall', 'shame', 'shape', 'share', 'shark', 'sharp', 'sheep', 'sheer', 'sheet', 'shelf', 'shell', 'shift', 'shine', 'shiny', 'ships', 'shirt', 'shock', 'shoes', 'shook', 'shoot', 'shops', 'shore', 'short', 'shots', 'shown', 'shows', 'sides', 'siege', 'sight', 'sigma', 'signs', 'silly', 'since', 'sites', 'sixth', 'sized', 'sizes', 'skies', 'skill', 'skins', 'skirt', 'skull', 'slate', 'slave', 'sleek', 'sleep', 'slept', 'slice', 'slide', 'slope', 'slots', 'small', 'smart', 'smell', 'smile', 'smoke', 'snack', 'snake', 'sneak', 'socks', 'soils', 'solar', 'solid', 'solve', 'songs', 'sonic', 'sorry', 'sorts', 'souls', 'sound', 'south', 'space', 'spare', 'spark', 'speak', 'specs', 'speed', 'spell', 'spend', 'spent', 'sperm', 'spice', 'spicy', 'spike', 'spine', 'spite', 'split', 'spoke', 'spoon', 'sport', 'spots', 'spray', 'spurs', 'squad', 'stack', 'staff', 'stage', 'stain', 'stake', 'stamp', 'stand', 'stark', 'stars', 'start', 'state', 'stats', 'stays', 'steak', 'steal', 'steam', 'steel', 'steep', 'steer', 'stems', 'steps', 'stick', 'stiff', 'still', 'stock', 'stole', 'stone', 'stood', 'stool', 'stops', 'store', 'storm', 'story', 'stove', 'strap', 'straw', 'strip', 'stuck', 'study', 'stuff', 'style', 'sucks', 'sugar', 'suite', 'suits', 'sunny', 'super', 'surge', 'sushi', 'swear', 'sweat', 'sweet', 'swept', 'swift', 'swing', 'swiss', 'sword', 'syrup', 'table', 'taken', 'takes', 'tales', 'talks', 'tanks', 'tapes', 'tasks', 'taste', 'tasty', 'taxes', 'teach', 'teams', 'tears', 'teens', 'teeth', 'tells', 'tempo', 'tends', 'tenth', 'tents', 'terms', 'tests', 'texts', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thigh', 'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'thumb', 'tiger', 'tight', 'tiles', 'timer', 'times', 'tired', 'tires', 'title', 'toast', 'today', 'token', 'tones', 'tools', 'tooth', 'topic', 'torch', 'total', 'touch', 'tough', 'tours', 'towel', 'tower', 'towns', 'toxic', 'trace', 'track', 'tract', 'trade', 'trail', 'train', 'trait', 'trans', 'traps', 'trash', 'treat', 'trees', 'trend', 'trial', 'tribe', 'trick', 'tried', 'tries', 'trips', 'trout', 'truck', 'truly', 'trump', 'trunk', 'trust', 'truth', 'tubes', 'tumor', 'tuned', 'tunes', 'turbo', 'turns', 'tutor', 'tweet', 'twice', 'twins', 'twist', 'types', 'tyres', 'ultra', 'uncle', 'under', 'union', 'unite', 'units', 'unity', 'until', 'upper', 'upset', 'urban', 'urged', 'urine', 'usage', 'users', 'using', 'usual', 'vague', 'valid', 'value', 'valve', 'vapor', 'vault', 'vegan', 'veins', 'vents', 'venue', 'verse', 'video', 'views', 'villa', 'vinyl', 'viral', 'virus', 'visas', 'visit', 'vital', 'vivid', 'vocal', 'vodka', 'voice', 'volts', 'voted', 'voter', 'votes', 'wages', 'wagon', 'waist', 'walks', 'walls', 'wants', 'warns', 'waste', 'watch', 'water', 'watts', 'waves', 'wears', 'weeds', 'weeks', 'weigh', 'weird', 'wells', 'welsh', 'whale', 'wheat', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'wider', 'widow', 'width', 'winds', 'wines', 'wings', 'wiped', 'wired', 'wires', 'witch', 'wives', 'woman', 'women', 'woods', 'words', 'works', 'world', 'worms', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'wrath', 'wrist', 'write', 'wrong', 'wrote', 'yacht', 'yards', 'years', 'yeast', 'yield', 'young', 'yours', 'youth', 'yummy', 'zones'];
let startTime = 10;
let timer = startTime;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let blockCount = 0;
let rowCount = 0;
let answer;
let boardSize = 6;
let score = 0;
let timerInterval;
let correctAnswerArray = [];
let correctBlockArray = [];
let round = 0;
let playerArray = [];


// ***** DOM WINDOWS *****
let gameContainer = document.getElementById('gameboard');
let answerElem = document.getElementById('target-word');
let timeContainer = document.getElementById('timer');
let scoreContainer = document.getElementById('current-score');
let reviewForm = document.getElementById('review-form');
let reviewContainer = document.getElementById('review-container');


// ***** FUNCTIONS & UTILITIES *****

function createGameBoard() {
  for (let i = 0; i < boardSize; i++) {
    let letterRow = document.createElement('div');
    gameContainer.appendChild(letterRow);
    letterRow.id = `row-${i + 1}`;
    letterRow.className = 'letter-row';
    rowCount++;
    for (let j = i * boardSize; j < (i + 1) * boardSize; j++) {
      let letter = document.createElement('div');
      letterRow.appendChild(letter);
      letter.id = `block-${j}`;
      letter.className = 'letter-block';
      blockCount++;
    }
  }
}

function createStart() {
  let startContainer = document.createElement('div');
  gameContainer.appendChild(startContainer);
  let startBtn = document.createElement('button');
  startBtn.id = 'startBtn';
  startBtn.innerText = 'Start Game';
  startContainer.appendChild(startBtn);
}

function fillBoard() {
  for (let i = 0; i < blockCount; i++) {
    let fillLetter = document.getElementById(`block-${i}`);
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    fillLetter.innerText = randLetter.toUpperCase();
  }
}

function wordBreak() {
  let randAnswer = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
  let answer = randAnswer.split('');
  return answer;
}

function displayAnswer() {
  answerElem.innerText = `TARGET WORD: ${answer.join('')}`;
}

function horizontalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if (Math.floor((randNum % rowCount) + answer.length) > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum--;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum++;

    }
  }
}

function verticalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum / rowCount);
  answer = wordBreak();
  displayAnswer();
  if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum -= rowCount;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum += rowCount;

    }
  }
}

function diagonalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum / rowCount);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum % rowCount) + answer.length > rowCount) {
    // backwards up
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount - 1;
      }
      // backwards down
    } else {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum + rowCount - 1;
      }
    }
  } else {
    // forwards up
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount + 1;
      }
      // forwards down
    } else {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum + rowCount + 1;
      }
    }
  }
}

function directionSelector() {
  let randoNum = Math.floor(Math.random() * 3);
  if (randoNum === 0) {
    horizontalFill();
  } else if (randoNum === 1) {
    verticalFill();
  } else {
    diagonalFill();
  }
}

function wipeBoard() {
  let removeBoard = document.querySelectorAll('div');
  removeBoard.forEach(e => e.remove());
  blockCount = 0;
  rowCount = 0;
}

function advanceTimer() {
  if (timer > 0) {
    timer -= 1;
    timeContainer.textContent = `TIME REMAINING: ${timer}`;
  } else {
    // let gameOverColor = document.querySelectorAll('.correct-answer');
    // gameOverColor.forEach(e => e.body.style.backgroundColor = 'orange');
    gameOver();
    timer = startTime;
  }
}

function gameOver() {
  clearInterval(timerInterval);
  wipeBoard();
  boardSize = 6;
  correctAnswerArray = [];
  correctBlockArray = [];
  timeContainer.textContent = 'TIME REMAINING: 0';
  let endMessage = document.createElement('div');
  endMessage.innerText = 'Game Over!';
  gameContainer.appendChild(endMessage);
  submitName();
}

function submitName() {
  let sName = document.createElement('div');
  gameContainer.appendChild(sName);
  let fieldName = document.createElement('form');
  fieldName.id = 'userNameForm';
  sName.appendChild(fieldName);
  let labelName = document.createElement('label');
  labelName.for = 'userName';
  labelName.innerText = 'What is your Name?';
  fieldName.appendChild(labelName);
  let inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.id = 'userName';
  inputName.name = 'userName';
  fieldName.appendChild(inputName);
  let userBtn = document.createElement('button');
  userBtn.id = 'userBtn';
  userBtn.type = 'submit';
  userBtn.innerText = 'Submit';
  fieldName.appendChild(userBtn);
  fieldName.addEventListener('submit', handleSubmit);
}

function nextRound() {
  if(round % 5 === 0 && round > 1){
    boardSize++;
  }
  wipeBoard();
  createGameBoard();
  fillBoard();
  directionSelector();
  round++;
}

// ***** CONSTRUCTORS*****
function Player(name, highScore, round) {
  this.name = name;
  this.highScore = highScore;
  this.round = round;
}

// ***** EVENT HANDLERS*****
function handleStart(event) {
  let itemClicked = event.target;
  if (itemClicked.id === 'startBtn') {
    score = 0;
    round = 0;
    nextRound();
    timerInterval = setInterval(advanceTimer, 1000);

  }
  if (itemClicked.className === 'correct-answer') {
    if (!correctAnswerArray.includes(event.target.id)) {
      correctAnswerArray.push(event.target.id);
      console.log(event.target);
      event.target.style.backgroundColor = 'green';
      if (correctAnswerArray.length === correctBlockArray.length) {
        score += rowCount;
        timer += Math.floor(rowCount / 2);
        scoreContainer.innerText = `Score: ${score}`;
        correctAnswerArray = [];
        correctBlockArray = [];
        console.log(correctAnswerArray);
        setTimeout(nextRound, 750);
      }
    }
  }
  if (itemClicked.className !== 'correct-answer' && itemClicked.className === 'letter-block') {
    score -= Math.floor(rowCount / 2);
    timer -= Math.floor(rowCount / 3);
    scoreContainer.innerText = `Score: ${score}`;
    event.target.style.backgroundColor = 'red';
  }
}
function handleReview(event){
  event.preventDefault();

  let submitItem = event.target.review.value;
  let reviewParagraph = document.createElement('p');
  console.log(submitItem);
  reviewParagraph.textContent = `${submitItem}`;
  reviewParagraph.className = 'user-review';
  reviewContainer.appendChild(reviewParagraph);
}
function handleSubmit(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  let newPlayer = new Player(userName, score, round);
  playerArray.push(newPlayer);
  let stringifiedPlayer = JSON.stringify(playerArray);
  localStorage.setItem('playerScore', stringifiedPlayer);
  wipeBoard();
  createStart();
}


// *****EXECUTABLE CODE*****

let storedPlayer = localStorage.getItem('playerScore');
let parsedPlayer = JSON.parse(storedPlayer);

if (storedPlayer){
  playerArray = parsedPlayer;
}
createStart();
gameContainer.addEventListener('click', handleStart);
reviewForm.addEventListener('submit', handleReview);

