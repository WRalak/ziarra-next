import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const yellow = '#FFD84D';
const black = '#050505';
const panel = '#111111';
const panel2 = '#181818';
const line = '#2A2A2A';
const muted = '#B8B8B8';

const images = {
  hero: require('./assets/pic.jpg'),
  alt: require('./assets/picc.jpg'),
  hotel: require('./assets/hotel.jpg'),
  homestay: require('./assets/homestay.jpg'),
};

const accommodations = [
  ['Hotels', 'Verified comfort for city breaks and safari gateways.', images.hotel],
  ['Homestays', 'Hosted stays with local warmth and cultural depth.', images.homestay],
  ['Camping', 'Open-air escapes close to nature and community.', images.hero],
  ['Glamping', 'Elevated outdoor stays with polished amenities.', images.alt],
];

const experiences = [
  ['Dawn Game Drive', 'Masai Mara, Kenya', '$120', images.hero],
  ['Swahili Kitchen Trail', 'Mombasa, Kenya', '$48', images.alt],
  ['Zanzibar Dhow Cruise', 'Stone Town, Zanzibar', '$60', images.homestay],
];

const trending = [
  ['Mara migration watch', 'Trending with group travelers', '2.4K saves', images.hero],
  ['Zanzibar creator weekend', 'Hot for influencers', '980 joins', images.homestay],
  ['Cape food and wine route', 'Top rated this week', '4.9 rating', images.alt],
];

const nearby = [
  ['Nairobi National Park', '34 min away', 'Safari drive'],
  ['Karen Blixen Museum', '28 min away', 'Culture'],
  ['Kilimani food walk', '12 min away', 'Culinary'],
];

const communityPosts = [
  ['Maya N.', 'Planning a 6-day Kenya coast route. Who wants the itinerary?', '128 saves'],
  ['Travel Lens', 'Creator tip: golden hour in Lamu is unmatched.', '42 comments'],
  ['Nomad Circle', 'Group trip opening: Rwanda gorilla trek, 4 spots left.', '8 requests'],
];

const navItems = [
  ['accommodations', 'Accommodations'],
  ['experiences', 'Experiences'],
  ['trips', 'Trips'],
  ['community', 'Community'],
  ['profile', 'Profile'],
];

export default function App() {
  const [screen, setScreen] = useState('onboarding');
  const [authMode, setAuthMode] = useState('login');
  const [isAuthed, setIsAuthed] = useState(false);

  const activeScreen = useMemo(() => {
    if (!isAuthed && screen !== 'onboarding' && screen !== 'auth') return 'auth';
    return screen;
  }, [isAuthed, screen]);

  const enterApp = () => {
    setIsAuthed(true);
    setScreen('accommodations');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" backgroundColor={black} />
      {activeScreen === 'onboarding' && <OnboardingScreen onStart={() => setScreen('auth')} onSkip={enterApp} />}
      {activeScreen === 'auth' && (
        <AuthScreen mode={authMode} setMode={setAuthMode} onSubmit={enterApp} onBack={() => setScreen('onboarding')} />
      )}
      {activeScreen === 'accommodations' && <AppShell current={activeScreen} setScreen={setScreen}><AccommodationsScreen setScreen={setScreen} /></AppShell>}
      {activeScreen === 'experiences' && <AppShell current={activeScreen} setScreen={setScreen}><ExperiencesScreen /></AppShell>}
      {activeScreen === 'trips' && <AppShell current={activeScreen} setScreen={setScreen}><TripsScreen /></AppShell>}
      {activeScreen === 'community' && <AppShell current={activeScreen} setScreen={setScreen}><CommunityScreen /></AppShell>}
      {activeScreen === 'profile' && <AppShell current={activeScreen} setScreen={setScreen}><ProfileScreen onLogout={() => { setIsAuthed(false); setScreen('auth'); }} /></AppShell>}
    </SafeAreaView>
  );
}

function OnboardingScreen({ onStart, onSkip }) {
  return (
    <ImageBackground source={images.hero} resizeMode="cover" style={styles.fullScreenHero}>
      <View style={styles.heroShade} />
      <View style={styles.brandRow}>
        <View style={styles.logoMark}><Text style={styles.logoText}>Z</Text></View>
        <Text style={styles.brandName}>Ziarra</Text>
      </View>
      <View style={styles.onboardingCopy}>
        <Text style={styles.kicker}>Africa and beyond</Text>
        <Text style={styles.onboardingTitle}>Plan, book, and share travel in one vibrant hub.</Text>
        <Text style={styles.onboardingText}>
          Curated accommodation, immersive tours, and community-driven travel for solo adventurers, groups, creators, and destination partners.
        </Text>
        <View style={styles.pillRow}>
          {['Hotels', 'Tours', 'Community'].map((item) => <Text key={item} style={styles.pill}>{item}</Text>)}
        </View>
      </View>
      <View style={styles.bottomActions}>
        <Pressable style={styles.primaryButton} onPress={onStart}><Text style={styles.primaryButtonText}>Get started</Text></Pressable>
        <Pressable style={styles.secondaryButton} onPress={onSkip}><Text style={styles.secondaryButtonText}>Preview app</Text></Pressable>
      </View>
    </ImageBackground>
  );
}

function AuthScreen({ mode, setMode, onSubmit, onBack }) {
  const isSignup = mode === 'signup';
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.authContent} showsVerticalScrollIndicator={false}>
      <Pressable onPress={onBack}><Text style={styles.backText}>Back</Text></Pressable>
      <View style={styles.logoMarkLarge}><Text style={styles.logoTextLarge}>Z</Text></View>
      <Text style={styles.authTitle}>{isSignup ? 'Create your Ziarra account' : 'Welcome back to Ziarra'}</Text>
      <Text style={styles.authText}>
        {isSignup ? 'Join travelers, creators, hosts, and communities discovering Africa and beyond.' : 'Sign in to manage trips, bookings, rewards, and community plans.'}
      </Text>
      <View style={styles.authCard}>
        {isSignup && <Field label="Full name" placeholder="Amara Okello" />}
        <Field label="Email" placeholder="you@example.com" />
        <Field label="Password" placeholder="Minimum 8 characters" secure />
        {isSignup && <Field label="Travel style" placeholder="Solo, group, creator, partner" />}
        <Pressable style={styles.primaryButtonWide} onPress={onSubmit}>
          <Text style={styles.primaryButtonText}>{isSignup ? 'Create account' : 'Log in'}</Text>
        </Pressable>
        <Pressable style={styles.socialButton}><Text style={styles.socialButtonText}>Continue with Google</Text></Pressable>
        <Pressable style={styles.socialButton}><Text style={styles.socialButtonText}>Continue with Apple</Text></Pressable>
      </View>
      <Pressable onPress={() => setMode(isSignup ? 'login' : 'signup')}>
        <Text style={styles.switchText}>{isSignup ? 'Already have an account? Log in' : 'New here? Create an account'}</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({ label, placeholder, secure }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput secureTextEntry={secure} placeholder={placeholder} placeholderTextColor="#777" style={styles.input} />
    </View>
  );
}

function AppShell({ children, current, setScreen }) {
  return (
    <View style={styles.appFrame}>
      {children}
      <View style={styles.bottomNav}>
        {navItems.map(([key, label]) => (
          <Pressable key={key} onPress={() => setScreen(key)} style={[styles.navItem, current === key && styles.navItemActive]}>
            <Text style={[styles.navText, current === key && styles.navTextActive]}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function TopProfileBar({ title, subtitle }) {
  return (
    <View style={styles.topProfileBar}>
      <View style={styles.topProfileLeft}>
        <View style={styles.topAvatar}><Text style={styles.topAvatarText}>A</Text></View>
        <View style={styles.topProfileCopy}>
          <Text style={styles.topTitle}>{title}</Text>
          <Text style={styles.topSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Pressable style={styles.notificationButton}>
        <Text style={styles.notificationText}>!</Text>
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

function AccommodationsScreen({ setScreen }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TopProfileBar title="Hi, Amara" subtitle="Explore stays near you" />
      <Text style={styles.kicker}>Accommodations</Text>
      <Text style={styles.pageTitle}>Hotels, homestays, camping and glamping.</Text>
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>Q</Text>
        <TextInput placeholder="Search hotels, homestays, camping" placeholderTextColor="#8E8E8E" style={styles.searchInput} />
      </View>
      <View style={styles.statementCard}>
        <Text style={styles.statementTitle}>Curated places to stay, matched to the way you travel.</Text>
        <Text style={styles.statementText}>Compare verified hotels, local homestays, camping escapes, and glamping retreats across Africa and beyond.</Text>
        <Pressable style={styles.primaryButtonWide} onPress={() => setScreen('experiences')}><Text style={styles.primaryButtonText}>Add experiences</Text></Pressable>
      </View>
      <NearbyPanel />
      <SectionTitle title="Trending stays" action="See all" />
      <TrendingCarousel />
      <SectionTitle title="Accommodation types" action="Filter" />
      <AccommodationCarousel />
    </ScrollView>
  );
}

function ExperiencesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TopProfileBar title="Hi, Amara" subtitle="Tours and experiences" />
      <Text style={styles.kicker}>Experiences</Text>
      <Text style={styles.pageTitle}>Immersive tours, culture, food and wild escapes.</Text>
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>Q</Text>
        <TextInput placeholder="Search safaris, food trails, culture" placeholderTextColor="#8E8E8E" style={styles.searchInput} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
        {['Trending', 'Safari', 'Culture', 'Culinary', 'Coastal', 'Events'].map((item, index) => (
          <Text key={item} style={[styles.filterChip, index === 0 && styles.filterChipActive]}>{item}</Text>
        ))}
      </ScrollView>
      <NearbyPanel />
      <SectionTitle title="Trending" action="Map" />
      <TrendingCarousel />
      <SectionTitle title="Experiences" action="Filter" />
      <ExperienceList />
    </ScrollView>
  );
}

function TripsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TopProfileBar title="Hi, Amara" subtitle="Your active plans" />
      <Text style={styles.pageTitle}>Trip planner</Text>
      <View style={styles.tripCard}>
        <Text style={styles.tripLabel}>Next trip</Text>
        <Text style={styles.tripTitle}>Mara, Mombasa and Lamu loop</Text>
        <Text style={styles.tripMeta}>8 days · 4 travelers · 3 stays · 5 experiences</Text>
        <View style={styles.stepList}>
          {['Confirm Serengeti Grand', 'Add Swahili Kitchen Trail', 'Invite group members', 'Pay balance by Jul 18'].map((item) => (
            <View key={item} style={styles.stepItem}><View style={styles.stepDot} /><Text style={styles.stepText}>{item}</Text></View>
          ))}
        </View>
        <Pressable style={styles.primaryButtonWide}><Text style={styles.primaryButtonText}>Continue planning</Text></Pressable>
      </View>
      <NearbyPanel />
      <SectionTitle title="Suggested near your route" action="Add" />
      <ExperienceList />
      <MetricGrid />
    </ScrollView>
  );
}

function CommunityScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TopProfileBar title="Hi, Amara" subtitle="Travel rooms and creators" />
      <Text style={styles.pageTitle}>Community</Text>
      <Text style={styles.pageText}>Connect with solo travelers, group planners, influencers, travel communities, and destination partners.</Text>
      <NearbyPanel />
      <SectionTitle title="Trending rooms" action="Join" />
      <TrendingCarousel />
      {communityPosts.map(([name, text, meta]) => (
        <View key={name} style={styles.postCard}>
          <View style={styles.avatar}><Text style={styles.avatarText}>{name.slice(0, 1)}</Text></View>
          <View style={styles.postCopy}>
            <Text style={styles.postName}>{name}</Text>
            <Text style={styles.postText}>{text}</Text>
            <Text style={styles.postMeta}>{meta}</Text>
          </View>
        </View>
      ))}
      <Pressable style={styles.primaryButtonWide}><Text style={styles.primaryButtonText}>Create a travel room</Text></Pressable>
    </ScrollView>
  );
}

function ProfileScreen({ onLogout }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TopProfileBar title="Profile" subtitle="Notifications and account" />
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}><Text style={styles.profileAvatarText}>A</Text></View>
        <View style={styles.profileCopy}>
          <Text style={styles.profileName}>Amara Okello</Text>
          <Text style={styles.profileMeta}>Explorer Level 4 · Nairobi</Text>
        </View>
      </View>
      <MetricGrid />
      <NearbyPanel />
      <View style={styles.profileCard}>
        <Text style={styles.sectionKicker}>Account</Text>
        {['Saved stays', 'Bookings', 'Payment methods', 'Creator dashboard', 'Partner center', 'Settings'].map((item) => (
          <Pressable key={item} style={styles.menuRow}><Text style={styles.menuText}>{item}</Text><Text style={styles.menuArrow}>›</Text></Pressable>
        ))}
      </View>
      <Pressable style={styles.secondaryButtonFull} onPress={onLogout}><Text style={styles.secondaryButtonText}>Log out</Text></Pressable>
    </ScrollView>
  );
}

function AccommodationCarousel() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardRow}>
      {accommodations.map(([label, text, image]) => (
        <Pressable key={label} style={styles.accommodationCard}>
          <Image source={image} style={styles.accommodationImage} />
          <View style={styles.cardOverlay} />
          <View style={styles.accommodationCopy}>
            <Text style={styles.accommodationLabel}>{label}</Text>
            <Text style={styles.accommodationMeta}>{text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function TrendingCarousel() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trendingRow}>
      {trending.map(([title, subtitle, meta, image]) => (
        <Pressable key={title} style={styles.trendingCard}>
          <Image source={image} style={styles.trendingImage} />
          <View style={styles.trendingOverlay} />
          <View style={styles.trendingBadge}><Text style={styles.trendingBadgeText}>Trending</Text></View>
          <View style={styles.trendingCopy}>
            <Text style={styles.trendingTitle}>{title}</Text>
            <Text style={styles.trendingSubtitle}>{subtitle}</Text>
            <Text style={styles.trendingMeta}>{meta}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function NearbyPanel() {
  return (
    <View style={styles.nearbyPanel}>
      <View style={styles.nearbyHeader}>
        <View>
          <Text style={styles.sectionKicker}>Always near you</Text>
          <Text style={styles.nearbyTitle}>Close-by picks</Text>
        </View>
        <View style={styles.liveDotWrap}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>Live</Text>
        </View>
      </View>
      <View style={styles.nearbyList}>
        {nearby.map(([title, distance, type]) => (
          <Pressable key={title} style={styles.nearbyItem}>
            <View style={styles.nearbyPin}><Text style={styles.nearbyPinText}>•</Text></View>
            <View style={styles.nearbyCopy}>
              <Text style={styles.nearbyName}>{title}</Text>
              <Text style={styles.nearbyMeta}>{distance} · {type}</Text>
            </View>
            <Text style={styles.nearbyArrow}>›</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function ExperienceList() {
  return (
    <View style={styles.list}>
      {experiences.map(([title, place, price, image]) => (
        <Pressable key={title} style={styles.experienceCard}>
          <Image source={image} style={styles.experienceImage} />
          <View style={styles.experienceCopy}>
            <Text style={styles.experienceTitle}>{title}</Text>
            <Text style={styles.experienceMeta}>{place}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

function SectionTitle({ title, action, onPress }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Pressable style={styles.smallYellowButton} onPress={onPress}><Text style={styles.smallYellowButtonText}>{action}</Text></Pressable>
    </View>
  );
}

function MetricGrid() {
  return (
    <View style={styles.metricGrid}>
      {[
        ['12', 'Saved'],
        ['4', 'Trips'],
        ['740', 'Points'],
      ].map(([value, label]) => (
        <View key={label} style={styles.metricCard}>
          <Text style={styles.metricValue}>{value}</Text>
          <Text style={styles.metricLabel}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: black },
  appFrame: { flex: 1, backgroundColor: black },
  screen: { flex: 1, backgroundColor: black },
  content: { paddingBottom: 104, paddingHorizontal: 20, paddingTop: 22 },
  fullScreenHero: { flex: 1, justifyContent: 'space-between', padding: 20 },
  heroShade: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.72)' },
  brandRow: { alignItems: 'center', flexDirection: 'row', gap: 12 },
  logoMark: { alignItems: 'center', backgroundColor: yellow, borderRadius: 16, height: 48, justifyContent: 'center', width: 48 },
  logoText: { color: black, fontSize: 24, fontWeight: '900' },
  brandName: { color: '#FFF', fontSize: 24, fontWeight: '900' },
  onboardingCopy: { gap: 12 },
  kicker: { color: yellow, fontSize: 12, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' },
  onboardingTitle: { color: '#FFF', fontSize: 46, fontWeight: '900', letterSpacing: 0, lineHeight: 50 },
  onboardingText: { color: '#ECECEC', fontSize: 16, fontWeight: '600', lineHeight: 25 },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  pill: { backgroundColor: 'rgba(255,216,77,0.16)', borderColor: yellow, borderRadius: 999, borderWidth: 1, color: yellow, fontSize: 12, fontWeight: '900', paddingHorizontal: 13, paddingVertical: 8 },
  bottomActions: { gap: 12 },
  primaryButton: { alignItems: 'center', backgroundColor: yellow, borderRadius: 999, justifyContent: 'center', minHeight: 54 },
  primaryButtonText: { color: black, fontSize: 15, fontWeight: '900' },
  secondaryButton: { alignItems: 'center', borderColor: yellow, borderRadius: 999, borderWidth: 1, justifyContent: 'center', minHeight: 54 },
  secondaryButtonText: { color: yellow, fontSize: 15, fontWeight: '900' },
  authContent: { padding: 20, paddingBottom: 48 },
  backText: { color: yellow, fontSize: 14, fontWeight: '900', marginBottom: 28 },
  logoMarkLarge: { alignItems: 'center', backgroundColor: yellow, borderRadius: 22, height: 68, justifyContent: 'center', width: 68 },
  logoTextLarge: { color: black, fontSize: 34, fontWeight: '900' },
  authTitle: { color: '#FFF', fontSize: 34, fontWeight: '900', letterSpacing: 0, lineHeight: 39, marginTop: 26 },
  authText: { color: muted, fontSize: 15, fontWeight: '600', lineHeight: 24, marginTop: 10 },
  authCard: { backgroundColor: panel, borderColor: line, borderRadius: 28, borderWidth: 1, gap: 14, marginTop: 24, padding: 18 },
  fieldWrap: { gap: 8 },
  fieldLabel: { color: '#FFF', fontSize: 13, fontWeight: '900' },
  input: { backgroundColor: '#080808', borderColor: line, borderRadius: 18, borderWidth: 1, color: '#FFF', fontSize: 15, fontWeight: '700', minHeight: 52, paddingHorizontal: 15 },
  primaryButtonWide: { alignItems: 'center', backgroundColor: yellow, borderRadius: 999, justifyContent: 'center', minHeight: 54, paddingHorizontal: 16 },
  socialButton: { alignItems: 'center', borderColor: line, borderRadius: 999, borderWidth: 1, justifyContent: 'center', minHeight: 52 },
  socialButtonText: { color: '#FFF', fontSize: 14, fontWeight: '900' },
  switchText: { color: yellow, fontSize: 14, fontWeight: '900', marginTop: 18, textAlign: 'center' },
  pageTitle: { color: '#FFF', fontSize: 36, fontWeight: '900', letterSpacing: 0, lineHeight: 41, marginTop: 6 },
  pageText: { color: muted, fontSize: 15, fontWeight: '600', lineHeight: 24, marginTop: 10 },
  searchBox: { alignItems: 'center', backgroundColor: panel, borderColor: line, borderRadius: 22, borderWidth: 1, flexDirection: 'row', gap: 12, marginTop: 18, minHeight: 56, paddingHorizontal: 16 },
  searchIcon: { color: yellow, fontSize: 16, fontWeight: '900' },
  searchInput: { color: '#FFF', flex: 1, fontSize: 15, fontWeight: '700', minWidth: 0 },
  statementCard: { backgroundColor: panel, borderColor: line, borderRadius: 28, borderWidth: 1, marginTop: 18, padding: 20 },
  statementTitle: { color: '#FFF', fontSize: 25, fontWeight: '900', letterSpacing: 0, lineHeight: 31 },
  statementText: { color: muted, fontSize: 14, fontWeight: '600', lineHeight: 23, marginTop: 10, marginBottom: 18 },
  sectionHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 28 },
  sectionTitle: { color: '#FFF', flex: 1, fontSize: 24, fontWeight: '900', letterSpacing: 0 },
  smallYellowButton: { backgroundColor: yellow, borderRadius: 999, paddingHorizontal: 16, paddingVertical: 9 },
  smallYellowButtonText: { color: black, fontSize: 12, fontWeight: '900' },
  cardRow: { gap: 14, paddingVertical: 14 },
  trendingRow: { gap: 14, paddingVertical: 14 },
  trendingCard: { borderColor: line, borderRadius: 30, borderWidth: 1, height: 230, overflow: 'hidden', width: 270 },
  trendingImage: { height: '100%', width: '100%' },
  trendingOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.46)' },
  trendingBadge: { backgroundColor: yellow, borderRadius: 999, left: 14, paddingHorizontal: 12, paddingVertical: 7, position: 'absolute', top: 14 },
  trendingBadgeText: { color: black, fontSize: 11, fontWeight: '900' },
  trendingCopy: { bottom: 18, left: 16, position: 'absolute', right: 16 },
  trendingTitle: { color: '#FFF', fontSize: 24, fontWeight: '900', letterSpacing: 0, lineHeight: 29 },
  trendingSubtitle: { color: '#EDEDED', fontSize: 13, fontWeight: '700', marginTop: 7 },
  trendingMeta: { color: yellow, fontSize: 12, fontWeight: '900', marginTop: 8 },
  nearbyPanel: { backgroundColor: '#10100D', borderColor: 'rgba(255,216,77,0.32)', borderRadius: 28, borderWidth: 1, marginTop: 18, padding: 17 },
  nearbyHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  nearbyTitle: { color: '#FFF', fontSize: 22, fontWeight: '900', letterSpacing: 0, marginTop: 2 },
  liveDotWrap: { alignItems: 'center', backgroundColor: 'rgba(255,216,77,0.12)', borderColor: 'rgba(255,216,77,0.32)', borderRadius: 999, borderWidth: 1, flexDirection: 'row', gap: 7, paddingHorizontal: 11, paddingVertical: 7 },
  liveDot: { backgroundColor: yellow, borderRadius: 5, height: 10, width: 10 },
  liveText: { color: yellow, fontSize: 11, fontWeight: '900' },
  nearbyList: { gap: 10, marginTop: 15 },
  nearbyItem: { alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.045)', borderColor: line, borderRadius: 18, borderWidth: 1, flexDirection: 'row', gap: 12, padding: 12 },
  nearbyPin: { alignItems: 'center', backgroundColor: yellow, borderRadius: 14, height: 30, justifyContent: 'center', width: 30 },
  nearbyPinText: { color: black, fontSize: 24, fontWeight: '900', lineHeight: 24 },
  nearbyCopy: { flex: 1 },
  nearbyName: { color: '#FFF', fontSize: 14, fontWeight: '900' },
  nearbyMeta: { color: muted, fontSize: 12, fontWeight: '700', marginTop: 3 },
  nearbyArrow: { color: yellow, fontSize: 24, fontWeight: '900' },
  accommodationCard: { borderColor: line, borderRadius: 26, borderWidth: 1, height: 190, overflow: 'hidden', width: 166 },
  accommodationImage: { height: '100%', width: '100%' },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.42)' },
  accommodationCopy: { bottom: 15, left: 14, position: 'absolute', right: 14 },
  accommodationLabel: { color: '#FFF', fontSize: 20, fontWeight: '900' },
  accommodationMeta: { color: '#EAEAEA', fontSize: 12, fontWeight: '700', lineHeight: 17, marginTop: 5 },
  list: { gap: 12, marginTop: 14 },
  experienceCard: { alignItems: 'center', backgroundColor: panel, borderColor: line, borderRadius: 24, borderWidth: 1, flexDirection: 'row', gap: 14, padding: 12 },
  experienceImage: { borderRadius: 18, height: 86, width: 92 },
  experienceCopy: { flex: 1 },
  experienceTitle: { color: '#FFF', fontSize: 17, fontWeight: '900' },
  experienceMeta: { color: muted, fontSize: 13, fontWeight: '600', marginTop: 5 },
  price: { color: yellow, fontSize: 15, fontWeight: '900', marginTop: 8 },
  chipRow: { gap: 10, paddingVertical: 18 },
  filterChip: { backgroundColor: panel, borderColor: line, borderRadius: 999, borderWidth: 1, color: '#FFF', fontSize: 13, fontWeight: '900', paddingHorizontal: 16, paddingVertical: 10 },
  filterChipActive: { backgroundColor: yellow, borderColor: yellow, color: black },
  tripCard: { backgroundColor: panel, borderColor: line, borderRadius: 30, borderWidth: 1, marginTop: 18, padding: 20 },
  tripLabel: { color: yellow, fontSize: 11, fontWeight: '900', letterSpacing: 1.1, textTransform: 'uppercase' },
  tripTitle: { color: '#FFF', fontSize: 27, fontWeight: '900', letterSpacing: 0, lineHeight: 33, marginTop: 8 },
  tripMeta: { color: muted, fontSize: 14, fontWeight: '600', marginTop: 8 },
  stepList: { gap: 12, marginVertical: 18 },
  stepItem: { alignItems: 'center', flexDirection: 'row', gap: 10 },
  stepDot: { backgroundColor: yellow, borderRadius: 6, height: 12, width: 12 },
  stepText: { color: '#FFF', flex: 1, fontSize: 14, fontWeight: '700' },
  metricGrid: { flexDirection: 'row', gap: 10, marginTop: 18 },
  metricCard: { backgroundColor: panel2, borderColor: line, borderRadius: 22, borderWidth: 1, flex: 1, padding: 16 },
  metricValue: { color: yellow, fontSize: 26, fontWeight: '900' },
  metricLabel: { color: muted, fontSize: 12, fontWeight: '800', marginTop: 4 },
  postCard: { backgroundColor: panel, borderColor: line, borderRadius: 24, borderWidth: 1, flexDirection: 'row', gap: 14, marginTop: 14, padding: 15 },
  avatar: { alignItems: 'center', backgroundColor: yellow, borderRadius: 20, height: 44, justifyContent: 'center', width: 44 },
  avatarText: { color: black, fontSize: 18, fontWeight: '900' },
  postCopy: { flex: 1 },
  postName: { color: '#FFF', fontSize: 15, fontWeight: '900' },
  postText: { color: muted, fontSize: 14, fontWeight: '600', lineHeight: 21, marginTop: 5 },
  postMeta: { color: yellow, fontSize: 12, fontWeight: '900', marginTop: 8 },
  profileHeader: { alignItems: 'center', flexDirection: 'row', gap: 14 },
  topProfileBar: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  topProfileLeft: { alignItems: 'center', flex: 1, flexDirection: 'row', gap: 12 },
  topAvatar: { alignItems: 'center', backgroundColor: yellow, borderRadius: 20, height: 46, justifyContent: 'center', width: 46 },
  topAvatarText: { color: black, fontSize: 20, fontWeight: '900' },
  topProfileCopy: { flex: 1 },
  topTitle: { color: '#FFF', fontSize: 18, fontWeight: '900' },
  topSubtitle: { color: muted, fontSize: 12, fontWeight: '700', marginTop: 3 },
  notificationButton: { alignItems: 'center', backgroundColor: panel, borderColor: line, borderRadius: 18, borderWidth: 1, height: 46, justifyContent: 'center', position: 'relative', width: 46 },
  notificationText: { color: yellow, fontSize: 18, fontWeight: '900' },
  notificationDot: { backgroundColor: yellow, borderColor: black, borderRadius: 5, borderWidth: 1, height: 10, position: 'absolute', right: 10, top: 10, width: 10 },
  profileAvatar: { alignItems: 'center', backgroundColor: yellow, borderRadius: 32, height: 66, justifyContent: 'center', width: 66 },
  profileAvatarText: { color: black, fontSize: 30, fontWeight: '900' },
  profileCopy: { flex: 1 },
  profileName: { color: '#FFF', fontSize: 25, fontWeight: '900' },
  profileMeta: { color: muted, fontSize: 13, fontWeight: '700', marginTop: 4 },
  profileCard: { backgroundColor: panel, borderColor: line, borderRadius: 28, borderWidth: 1, marginTop: 18, padding: 18 },
  sectionKicker: { color: yellow, fontSize: 11, fontWeight: '900', letterSpacing: 1.1, marginBottom: 8, textTransform: 'uppercase' },
  menuRow: { alignItems: 'center', borderBottomColor: line, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', minHeight: 48 },
  menuText: { color: '#FFF', fontSize: 15, fontWeight: '800' },
  menuArrow: { color: yellow, fontSize: 26, fontWeight: '900' },
  secondaryButtonFull: { alignItems: 'center', borderColor: yellow, borderRadius: 999, borderWidth: 1, justifyContent: 'center', marginTop: 18, minHeight: 54 },
  bottomNav: { alignItems: 'center', backgroundColor: 'rgba(5,5,5,0.96)', borderTopColor: line, borderTopWidth: 1, bottom: 0, flexDirection: 'row', gap: 4, left: 0, paddingBottom: 18, paddingHorizontal: 10, paddingTop: 10, position: 'absolute', right: 0 },
  navItem: { alignItems: 'center', borderRadius: 15, flex: 1, justifyContent: 'center', minHeight: 42 },
  navItemActive: { backgroundColor: yellow },
  navText: { color: muted, fontSize: 10, fontWeight: '900' },
  navTextActive: { color: black },
});
