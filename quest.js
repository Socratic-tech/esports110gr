// ESPORTS 110 Game Review Training - Quest Navigation
// Handles section selection, tab switching, and content display

class GameReviewQuest {
    constructor() {
        this.currentSection = 'introduction';
        this.currentTab = 'example'; // example, weak, explain, or practice
        this.init();
    }

    init() {
        // Load initial content
        this.renderNav();
        this.renderContent();
        this.attachEventListeners();
    }

    renderNav() {
        // Build section navigation
        const navContainer = document.getElementById('section-nav');
        
        const list = document.createElement('nav');
        list.className = 'section-list';

        questData.sections.forEach(section => {
            const item = document.createElement('div');
            item.className = `nav-item ${section.id === this.currentSection ? 'active' : ''}`;
            
            const button = document.createElement('button');
            button.className = 'nav-button';
            button.textContent = section.title;
            button.setAttribute('data-section', section.id);
            
            button.addEventListener('click', () => {
                this.setSection(section.id);
            });

            item.appendChild(button);
            list.appendChild(item);
        });

        navContainer.innerHTML = '';
        navContainer.appendChild(list);
    }

    renderContent() {
        // Get current section data
        const section = questData.sections.find(s => s.id === this.currentSection);
        
        // Update header
        const header = document.getElementById('section-header');
        header.innerHTML = `
            <h2>${section.title}</h2>
            <p class="section-subtitle">${section.description}</p>
        `;

        // Build tabs
        const tabsContainer = document.getElementById('section-tabs');
        tabsContainer.innerHTML = '';

        const tabList = document.createElement('div');
        tabList.className = 'tab-list';

        const tabs = ['example', 'weak', 'explain', 'practice'];
        
        tabs.forEach(tabName => {
            const tab = document.createElement('button');
            tab.className = `tab-button ${tabName === this.currentTab ? 'active' : ''}`;
            
            let displayName = tabName;
            if (tabName === 'example') displayName = '✓ Strong Examples';
            if (tabName === 'weak') displayName = '✗ What NOT to Do';
            if (tabName === 'explain') displayName = 'Explanation';
            if (tabName === 'practice') displayName = 'Practice';
            
            tab.textContent = displayName;
            tab.setAttribute('data-tab', tabName);
            
            tab.addEventListener('click', () => {
                this.setTab(tabName);
            });

            tabList.appendChild(tab);
        });

        tabsContainer.appendChild(tabList);

        // Render tab content
        this.renderTabContent(section);
    }

    renderTabContent(section) {
        const contentContainer = document.getElementById('section-content');
        let html = '<div class="tab-pane active">';

        if (this.currentTab === 'example') {
            // Show both goodExample and goodExample2
            if (section.goodExample) {
                html += `<h3>${section.goodExample.title}</h3>${section.goodExample.content}`;
            }
            if (section.goodExample2) {
                html += `<hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--color-border);">`;
                html += `<h3>${section.goodExample2.title}</h3>${section.goodExample2.content}`;
            }
        } else if (this.currentTab === 'weak') {
            // Show weakExample
            if (section.weakExample) {
                html += `<h3>${section.weakExample.title}</h3>${section.weakExample.content}`;
            }
        } else if (this.currentTab === 'explain') {
            // Show explain
            if (section.explain) {
                html += `<h3>${section.explain.title}</h3>${section.explain.content}`;
            }
        } else if (this.currentTab === 'practice') {
            // Show practice
            if (section.practice) {
                html += `<h3>${section.practice.title}</h3>${section.practice.content}`;
            }
        }

        html += '</div>';
        contentContainer.innerHTML = html;
    }

    setSection(sectionId) {
        this.currentSection = sectionId;
        this.currentTab = 'example'; // Reset to example when changing sections
        this.renderNav();
        this.renderContent();
        
        // Scroll to top of content
        document.getElementById('section-header').scrollIntoView({ behavior: 'smooth' });
    }

    setTab(tabName) {
        this.currentTab = tabName;
        const section = questData.sections.find(s => s.id === this.currentSection);
        this.renderTabContent(section);
        
        // Update active tab button
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
        });
    }

    formatTabName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    attachEventListeners() {
        // Event delegation is handled in renderNav and renderContent
        // This method is reserved for other interactive elements
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new GameReviewQuest();
});
