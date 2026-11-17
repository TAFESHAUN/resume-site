import { useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

/* ============================================================
   PART 1: YOUR DETAILS  ✏️
   Change everything in this part to your own details.
   Keep the quotes ' ', commas , and brackets [ ] { }
   ============================================================ */

const name = 'Your Name';
const jobTitle = 'Put your job title or goal here';
const location = 'Put your suburb and state here';
const email = 'your.email@example.com';
const githubUsername = 'your-github-username';
const linkedinLink = 'https://www.linkedin.com/in/your-profile';

// ----- RESUME tab -----
const summary =
  'Put your summary here: 2–3 sentences about who you are, what you are good at, and what you are looking for.';

const experience = [
  {
    role: 'Put your job title here',
    workplace: 'Put the workplace here',
    dates: 'Start – End',
    points: ['Put something you did here', 'Put something you achieved here'],
  },
];

const skills = ['List a skill', 'List a skill', 'List a skill', 'List a skill'];

const education = [
  {
    school: 'Put your school here',
    course: 'Put your course or certificate here',
    dates: 'Start – End',
  },
];

// ----- ABOUT tab -----
const aboutMe = [
  "Put a hello here, e.g. Hi, I'm ___ and I like ___.",
  'Put your story here: how you got into tech or what you love building.',
  'Put what you do outside of study here: sport, music, gaming, work.',
];

const interests = ['List an interest', 'List an interest', 'List an interest'];

// ----- REPOSITORIES tab -----
// Copy a { ... }, block for each GitHub project you want to show.
const repositories = [
  {
    name: 'resume-site',
    description: 'Put a one-sentence description of your project here.',
    link: 'https://github.com/your-github-username/resume-site',
  },
];

/* ============================================================
   PART 2: THE SCREEN
   This builds the page from your details above.
   ============================================================ */

export default function App() {
  // Remembers which tab is open. It starts on 'resume'.
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.page}>
      {/* ---------- Header: name and contact ---------- */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLetter}>{name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.muted}>{location}</Text>
        <View style={styles.links}>
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:' + email)}>
            Email
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/' + githubUsername)}>
            GitHub
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL(linkedinLink)}>
            LinkedIn
          </Text>
        </View>
      </View>

      {/* ---------- Tabs: press one to change what shows below ---------- */}
      <View style={styles.tabs}>
        <Pressable
          style={activeTab === 'resume' ? styles.tabActive : styles.tab}
          onPress={() => setActiveTab('resume')}
        >
          <Text style={activeTab === 'resume' ? styles.tabTextActive : styles.tabText}>Resume</Text>
        </Pressable>
        <Pressable
          style={activeTab === 'about' ? styles.tabActive : styles.tab}
          onPress={() => setActiveTab('about')}
        >
          <Text style={activeTab === 'about' ? styles.tabTextActive : styles.tabText}>About</Text>
        </Pressable>
        <Pressable
          style={activeTab === 'repos' ? styles.tabActive : styles.tab}
          onPress={() => setActiveTab('repos')}
        >
          <Text style={activeTab === 'repos' ? styles.tabTextActive : styles.tabText}>Repositories</Text>
        </Pressable>
      </View>

      {/* ---------- RESUME tab ---------- */}
      {activeTab === 'resume' && (
        <View>
          <View style={styles.card}>
            <Text style={styles.heading}>Summary</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.heading}>Work experience</Text>
            {experience.map((job, index) => (
              <View style={styles.entry} key={index}>
                <Text style={styles.bold}>
                  {job.role} <Text style={styles.muted}>· {job.workplace}</Text>
                </Text>
                <Text style={styles.muted}>{job.dates}</Text>
                {job.points.map((point, i) => (
                  <Text style={styles.text} key={i}>
                    • {point}
                  </Text>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.heading}>Skills</Text>
            <View style={styles.tags}>
              {skills.map((skill, index) => (
                <Text style={styles.tag} key={index}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.heading}>Education</Text>
            {education.map((item, index) => (
              <View style={styles.entry} key={index}>
                <Text style={styles.bold}>{item.school}</Text>
                <Text style={styles.muted}>{item.dates}</Text>
                <Text style={styles.text}>{item.course}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* ---------- ABOUT tab ---------- */}
      {activeTab === 'about' && (
        <View>
          <View style={styles.card}>
            <Text style={styles.heading}>About me</Text>
            {aboutMe.map((paragraph, index) => (
              <Text style={styles.paragraph} key={index}>
                {paragraph}
              </Text>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.heading}>Interests</Text>
            <View style={styles.tags}>
              {interests.map((interest, index) => (
                <Text style={styles.tag} key={index}>
                  {interest}
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* ---------- REPOSITORIES tab ---------- */}
      {activeTab === 'repos' && (
        <View style={styles.card}>
          <Text style={styles.heading}>Git repositories I'm working on</Text>
          {repositories.map((repo, index) => (
            <Pressable style={styles.repo} key={index} onPress={() => Linking.openURL(repo.link)}>
              <Text style={styles.repoName}>{repo.name}</Text>
              <Text style={styles.muted}>{repo.description}</Text>
            </Pressable>
          ))}
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/' + githubUsername)}>
            See all my repositories on GitHub →
          </Text>
        </View>
      )}

      <Text style={styles.footer}>Built with React Native · Hosted on GitHub Pages</Text>
    </ScrollView>
  );
}

/* ============================================================
   PART 3: STYLES 🎨
   Change these two colours to make the app yours.
   ============================================================ */

const accent = '#f51795'; // main colour: name, links, active tab
const accentLight = '#e0e7ff'; // light version: tag backgrounds

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  page: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    padding: 20,
    paddingTop: 50,
  },

  // Header
  header: {
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarLetter: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: accent,
    marginVertical: 4,
  },
  links: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  link: {
    color: accent,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },

  // Tabs
  tabs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    marginTop: 28,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#e5e7eb',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    marginBottom: -2,
  },
  tabActive: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: accent,
    marginBottom: -2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  tabTextActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: accent,
  },

  // Cards (each section)
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#6b7280',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1f2937',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1f2937',
    marginBottom: 10,
  },
  bold: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  muted: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#6b7280',
  },
  entry: {
    marginBottom: 16,
  },

  // Tags (skills & interests)
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: accentLight,
    color: accent,
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },

  // Repositories
  repo: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  repoName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: accent,
    marginBottom: 4,
  },

  footer: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
  },
});
