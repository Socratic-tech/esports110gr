// ESPORTS 110 Game Review Training - Quest Navigation
// Handles section selection, tab switching, and content display

class GameReviewQuest {
    constructor() {
        this.currentSection = 'introduction';
        this.currentTab = 'model'; // model, explain, or practice
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

        ['model', 'explain', 'practice'].forEach(tabName => {
            const tab = document.createElement('button');
            tab.className = `tab-button ${tabName === this.currentTab ? 'active' : ''}`;
            tab.textContent = this.formatTabName(tabName);
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
        const tabData = section[this.currentTab];

        contentContainer.innerHTML = `
            <div class="tab-pane active">
                <h3>${tabData.title}</h3>
                ${tabData.content}
            </div>
        `;

        // Add source attribution if model
        if (this.currentTab === 'model' && tabData.source) {
            const source = document.createElement('p');
            source.className = 'source-attribution';
            source.innerHTML = `<em>Source: ${tabData.source}</em>`;
            contentContainer.appendChild(source);
        }
    }

    setSection(sectionId) {
        this.currentSection = sectionId;
        this.currentTab = 'model'; // Reset to model when changing sections
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
